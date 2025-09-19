import random

def number_guessing_game():
    """
    A number guessing game where the computer picks a random number
    between 1 and 50, and the user keeps guessing until they get it right.
    Provides hints if the guess is too high or too low.
    """
    # Generate a random number between 1 and 50
    secret_number = random.randint(1, 50)
    attempts = 0
    
    print("🎯 Welcome to the Number Guessing Game!")
    print("I'm thinking of a number between 1 and 50.")
    print("Can you guess what it is?\n")
    
    while True:
        try:
            # Get user input
            user_guess = input("Enter your guess: ")
            
            # Convert to integer
            guess = int(user_guess)
            attempts += 1
            
            # Check if the guess is correct
            if guess == secret_number:
                print(f"🎉 Congratulations! You guessed it!")
                print(f"The number was {secret_number}")
                print(f"It took you {attempts} attempt(s) to guess correctly!")
                break
            elif guess < secret_number:
                print("📈 Too low! Try a higher number.")
            else:  # guess > secret_number
                print("📉 Too high! Try a lower number.")
                
        except ValueError:
            print("❌ Please enter a valid number!")
        except KeyboardInterrupt:
            print("\n\n👋 Thanks for playing! Goodbye!")
            break
    
    # Ask if they want to play again
    while True:
        play_again = input("\nWould you like to play again? (y/n): ").lower().strip()
        if play_again in ['y', 'yes']:
            print("\n" + "="*50 + "\n")
            number_guessing_game()  # Recursive call to start a new game
            break
        elif play_again in ['n', 'no']:
            print("👋 Thanks for playing! Goodbye!")
            break
        else:
            print("Please enter 'y' for yes or 'n' for no.")

if __name__ == "__main__":
    number_guessing_game()