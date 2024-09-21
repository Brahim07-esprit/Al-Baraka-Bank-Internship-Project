import tkinter as tk
from tkinter import filedialog, simpledialog, messagebox, ttk
from tkinter.scrolledtext import ScrolledText
import tkinter.font as tkFont
import sqlite3
import os

class ChatbotQA:
    def __init__(self):
        self.window = tk.Tk()
        self.window.title("Q&A Chatbot")
        self.window.geometry("800x500")

         # create custom font
        self.default_font = tk.font.nametofont("TkDefaultFont")
        self.default_font.configure(size=14)
        
        
        self.style = ttk.Style()
        self.style.configure("Treeview.Heading", font=('Arial', 14))  # Change column heading's font

        self.style.configure("TButton", font=("Arial", 10), padding=10)
        self.style.configure("TEntry", font=("Arial", 14), padding=10)
        self.style.configure("TLabel", font=("Arial", 14), padding=10)
        

        self.subject_label = ttk.Label(self.window, text="Subject:")
        self.subject_entry = ttk.Entry(self.window, font=("Arial", 14), width=30)

        self.question_label = ttk.Label(self.window, text="Question:")
        self.question_entry = ScrolledText(self.window, font=("Arial", 14), width=120, height=5)

        self.answer_label = ttk.Label(self.window, text="Answer:")
        self.answer_entry = ScrolledText(self.window, font=("Arial", 14), width=120, height=5)

        self.add_button = ttk.Button(self.window, text="Add", command=self.add_qa)
        self.update_button = ttk.Button(self.window, text="Update", command=self.update_qa)
        self.delete_button = ttk.Button(self.window, text="Delete", command=self.delete_qa)

        self.qa_list = ttk.Treeview(self.window, columns=("ID", "Subject", "Question", "Answer"), show="headings")
        self.qa_list.bind('<Double-1>', self.load_qa)

        self.qa_list.heading("ID", text="ID")
        self.qa_list.heading("Subject", text="Subject")
        self.qa_list.heading("Question", text="Question")
        self.qa_list.heading("Answer", text="Answer")

        self.qa_list.column("ID", minwidth=0, width=50, stretch=tk.NO)
        self.qa_list.column("Subject", minwidth=0, width=250, stretch=tk.YES)
        self.qa_list.column("Question", minwidth=0, width=250, stretch=tk.YES)
        self.qa_list.column("Answer", minwidth=0, width=250, stretch=tk.YES)

        self.subject_label.grid(row=0, column=0)
        self.subject_entry.grid(row=0, column=1)
        self.question_label.grid(row=1, column=0)
        self.question_entry.grid(row=1, column=1)
        self.answer_label.grid(row=2, column=0)
        self.answer_entry.grid(row=2, column=1)
        self.add_button.grid(row=3, column=0)
        self.update_button.grid(row=3, column=1)
        self.delete_button.grid(row=4, column=0)
        self.qa_list.grid(row=5, column=0, columnspan=2, sticky="nsew")

        self.window.grid_columnconfigure(0, weight=1)
        self.window.grid_columnconfigure(1, weight=1)
        self.window.grid_rowconfigure(5, weight=1)
        
        self.menu = tk.Menu(self.window)
        self.window.config(menu=self.menu)
        self.filemenu = tk.Menu(self.menu)
        self.menu.add_cascade(label="File", menu=self.filemenu)
        self.filemenu.add_command(label="Import...", command=self.import_file)

        self.db = sqlite3.connect('q_and_a.db')
        self.cursor = self.db.cursor()
        self.cursor.execute('''
            CREATE TABLE IF NOT EXISTS q_and_a (
                id INTEGER PRIMARY KEY,
                subject TEXT UNIQUE,
                question TEXT,
                answer TEXT
            )
        ''')
        self.db.commit()
        self.load_data()

    def format_subject(self, subject):
        return subject.replace(' ', '_')

    def save_to_file(self, subject, question, answer):
        if not os.path.exists('Q&A_chatbot'):
            os.makedirs('Q&A_chatbot')

        subject = self.format_subject(subject)
        with open(f'Q&A_chatbot/{subject}.txt', 'w') as file:
            file.write(f'Q:    {{ input: "{question}", output: "{subject}" }},\n')
            file.write(f'A: "{answer}",')

    def add_qa(self, subject=None, question=None, answer=None):
        if subject is None or question is None or answer is None:
            subject = self.subject_entry.get()
            question = self.question_entry.get("1.0", 'end-1c')
            answer = self.answer_entry.get("1.0", 'end-1c')

        if subject == "" or question == "" or answer == "":
            messagebox.showerror("Input Error", "All fields must be filled out")
            return

        try:
            self.cursor.execute('''
                INSERT INTO q_and_a (subject, question, answer) VALUES (?, ?, ?)
            ''', (self.format_subject(subject), question, answer))
            self.db.commit()
        except sqlite3.IntegrityError:
            messagebox.showerror("Error", "Subject must be unique")
            return

        self.save_to_file(subject, question, answer)
        self.load_data()
        
    

    def load_data(self):
        self.qa_list.delete(*self.qa_list.get_children())
        rows = self.cursor.execute('SELECT id, subject, question, answer FROM q_and_a').fetchall()

        for row in rows:
            self.qa_list.insert('', 'end', values=row)

    def load_qa(self, event):
        row_id = self.qa_list.focus()
        data = self.qa_list.item(row_id)

        self.subject_entry.delete(0, tk.END)
        self.question_entry.delete('1.0', tk.END)
        self.answer_entry.delete('1.0', tk.END)

        self.subject_entry.insert(tk.END, data['values'][1].replace('_', ' '))
        self.question_entry.insert(tk.END, data['values'][2])
        self.answer_entry.insert(tk.END, data['values'][3])

    def update_qa(self):
        row_id = self.qa_list.focus()
        data = self.qa_list.item(row_id)
        
        if not data:
            messagebox.showerror("Selection Error", "No record selected")
            return

        subject = self.subject_entry.get()
        question = self.question_entry.get("1.0", 'end-1c')
        answer = self.answer_entry.get("1.0", 'end-1c')

        try:
            self.cursor.execute('''
                UPDATE q_and_a SET subject = ?, question = ?, answer = ? WHERE id = ?
            ''', (self.format_subject(subject), question, answer, data['values'][0]))
            self.db.commit()
        except sqlite3.IntegrityError:
            messagebox.showerror("Error", "Subject must be unique")
            return

        self.save_to_file(subject, question, answer)
        self.load_data()

    def delete_qa(self):
        row_id = self.qa_list.focus()
        data = self.qa_list.item(row_id)
        
        if not data:
            messagebox.showerror("Selection Error", "No record selected")
            return

        self.cursor.execute('DELETE FROM q_and_a WHERE id = ?', (data['values'][0],))
        self.db.commit()

        subject_file = f"Q&A_chatbot/{data['values'][1]}.txt"
        if os.path.exists(subject_file):
            os.remove(subject_file)

        messagebox.showinfo("Success", "Question and answer deleted successfully")
        self.load_data()

    def import_file(self):
        filepath = filedialog.askopenfilename(filetypes=[("Text files", "*.txt")])

        if filepath:
            with open(filepath, 'r') as file:
                lines = file.readlines()

            for line in lines:
                line = line.strip()
                if line:
                    subject = simpledialog.askstring("Input", f"Subject for the question: '{line}'?")
                    if subject is None:
                        return

                    answer = simpledialog.askstring("Input", f"Answer for the question: '{line}'?", initialvalue="NONE")
                    self.add_qa(subject, line, answer)

    def run(self):
        self.window.mainloop()
    


if __name__ == "__main__":
    app = ChatbotQA()
    app.run()
