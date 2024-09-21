import sqlite3
import tkinter as tk
from tkinter import ttk
import matplotlib.pyplot as plt


def view_data():
    global success_index, document_type_index  # Declare variables as global

    # Clear all previous entries
    for entry in data_frame.grid_slaves():
        entry.destroy()

    # Connect to database
    conn = sqlite3.connect(
        'C:/Users/abdel/Desktop/Brahim/Projects/AlBaraka Chatbot/AlBaraka_Chatbot_2023-main/www.albaraka.com.tn/www.albaraka.com.tn/chatbot/AlBaraka_Chatbot.db')
    cursor = conn.cursor()

    # Fetch data
    cursor.execute("SELECT * FROM AlBaraka_chatbot")
    records = cursor.fetchall()

    # Get column names from cursor description
    columns = [column[0] for column in cursor.description]
    success_index = columns.index('success')
    document_type_index = columns.index('documentType')

    # Output in tkinter
    for i in range(len(records)):
        for j in range(len(records[0])):
            e = ttk.Entry(data_frame, width=20, font=('Arial', 16, 'bold'))
            e.grid(row=i, column=j)

            # Check if the success field is true, and if it is, make the text green, otherwise red.
            if j == success_index:
                if records[i][j]:
                    e.configure(foreground='green')
                    e.insert(tk.END, 'Success')
                else:
                    e.configure(foreground='red')
                    e.insert(tk.END, 'Failure')
            else:
                e.insert(tk.END, '' if records[i][j] is None else records[i][j])

    # Close connection
    conn.close()

    # Call this function again after 1000ms (1 second)
    root.after(1000, view_data)


def show_success_rate_plot():
    global success_index  # Declare variables as global

    # Connect to database
    conn = sqlite3.connect(
        'C:/Users/abdel/OneDrive/Bureau/Projects/Al Baraka WS/www.albaraka.com.tn/chatbot/AlBaraka_Chatbot.db')
    cursor = conn.cursor()

    # Fetch data
    cursor.execute("SELECT * FROM AlBaraka_chatbot")
    records = cursor.fetchall()

    # Close connection
    conn.close()

    # Calculate success rate
    success_count = sum(record[success_index] for record in records)
    total_count = len(records)
    success_rate = success_count / total_count if total_count > 0 else 0

    # Create and display plot for success rate
    plt.figure(figsize=(8, 6))
    plt.bar(['Success', 'Failure'], [success_count,
            total_count - success_count], color=['green', 'red'])
    plt.xlabel('Response')
    plt.ylabel('Count')
    plt.title('Chatbot Response Success Rate')
    plt.show()


def show_document_type_plot():
    global document_type_index  # Declare variables as global

    # Connect to database
    conn = sqlite3.connect(
        'C:/Users/abdel/OneDrive/Bureau/Projects/Al Baraka WS/www.albaraka.com.tn/chatbot/AlBaraka_Chatbot.db')
    cursor = conn.cursor()

    # Fetch data
    cursor.execute("SELECT * FROM AlBaraka_chatbot")
    records = cursor.fetchall()

    # Close connection
    conn.close()

    # Calculate document type counts
    document_type_counts = {}
    for record in records:
        document_type = record[document_type_index]
        document_type_counts[document_type] = document_type_counts.get(
            document_type, 0) + 1

    # Create and display plot for document type counts
    plt.figure(figsize=(10, 6))
    plt.bar(document_type_counts.keys(),
            document_type_counts.values(), color='orange')
    plt.xlabel('Document Type')
    plt.ylabel('Count')
    plt.title('Chatbot Document Type Distribution')
    plt.xticks(rotation=45)
    plt.tight_layout()
    plt.show()


root = tk.Tk()
root.title("AlBaraka Chatbot Data")

# Frame for the data display
data_frame = ttk.Frame(root)
data_frame.grid(row=0, column=0)

# Button to show success rate plot
success_rate_button = ttk.Button(
    root, text="Show Success Rate Plot", command=show_success_rate_plot)
success_rate_button.grid(row=1, column=0, pady=5)

# Button to show document type plot
document_type_button = ttk.Button(
    root, text="Show Document Type Plot", command=show_document_type_plot)
document_type_button.grid(row=2, column=0, pady=5)

# Call the view_data function immediately when the script is run
view_data()

root.mainloop()





