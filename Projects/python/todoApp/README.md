# Simple To-Do List Application

A console-based To-Do List application written in Python that allows users to manage their tasks.

## Features

- **Add Tasks**: Add new tasks to your to-do list
- **View Tasks**: Display all current tasks with numbering
- **Delete Tasks**: Remove tasks by selecting their number
- **Simple Interface**: Easy-to-use console menu system

## How to Run

1. Make sure you have Python installed on your system
2. Navigate to the project directory
3. Run the application:
   ```
   python todo_app.py
   ```

## How to Use

1. **Adding a Task**: Choose option 1 and enter your task description
2. **Viewing Tasks**: Choose option 2 to see all your current tasks
3. **Deleting a Task**: Choose option 3, then enter the number of the task you want to delete
4. **Exit**: Choose option 4 to quit the application

## Example Usage

```
==========================================
         TO-DO LIST APPLICATION
==========================================
1. Add Task
2. View Tasks
3. Delete Task
4. Exit
==========================================
Choose an option (1-4): 1
Enter a new task: Buy groceries
✓ Task 'Buy groceries' added successfully!

Press Enter to continue...
```

## Technical Details

- Tasks are stored in a Python list during runtime
- Data is not persisted between application runs
- Input validation is included for user entries
- Clean, user-friendly console interface with emojis and formatting