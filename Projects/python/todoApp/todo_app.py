#!/usr/bin/env python3
"""
Simple Console To-Do List Application
Allows users to add, view, and delete tasks.
Tasks are stored in a list during runtime.
"""

class TodoApp:
    def __init__(self):
        self.tasks = []
    
    def display_menu(self):
        """Display the main menu options."""
        print("\n" + "="*40)
        print("         TO-DO LIST APPLICATION")
        print("="*40)
        print("1. Add Task")
        print("2. View Tasks")
        print("3. Delete Task")
        print("4. Exit")
        print("="*40)
    
    def add_task(self):
        """Add a new task to the list."""
        task = input("Enter a new task: ").strip()
        if task:
            self.tasks.append(task)
            print(f"✓ Task '{task}' added successfully!")
        else:
            print("❌ Task cannot be empty!")
    
    def view_tasks(self):
        """Display all tasks in the list."""
        if not self.tasks:
            print("📝 No tasks available. Your to-do list is empty!")
            return
        
        print("\n" + "-"*40)
        print("           YOUR TASKS")
        print("-"*40)
        for i, task in enumerate(self.tasks, 1):
            print(f"{i}. {task}")
        print("-"*40)
    
    def delete_task(self):
        """Delete a task from the list."""
        if not self.tasks:
            print("📝 No tasks to delete. Your to-do list is empty!")
            return
        
        self.view_tasks()
        try:
            task_num = int(input("\nEnter the task number to delete: "))
            if 1 <= task_num <= len(self.tasks):
                removed_task = self.tasks.pop(task_num - 1)
                print(f"✓ Task '{removed_task}' deleted successfully!")
            else:
                print("❌ Invalid task number!")
        except ValueError:
            print("❌ Please enter a valid number!")
    
    def run(self):
        """Main application loop."""
        print("Welcome to your To-Do List Application!")
        
        while True:
            self.display_menu()
            choice = input("Choose an option (1-4): ").strip()
            
            if choice == '1':
                self.add_task()
            elif choice == '2':
                self.view_tasks()
            elif choice == '3':
                self.delete_task()
            elif choice == '4':
                print("👋 Thank you for using the To-Do List Application!")
                print("Goodbye!")
                break
            else:
                print("❌ Invalid choice! Please select 1-4.")
            
            # Pause before showing menu again
            input("\nPress Enter to continue...")


def main():
    """Entry point of the application."""
    app = TodoApp()
    app.run()


if __name__ == "__main__":
    main()