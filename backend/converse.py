import ollama

def main():
    print("Starting conversation with Qwen 2.5 7B. Type 'exit' to quit.")
    
    while True:
        user_input = input("You: ")
        if user_input.lower() == 'exit':
            break
        
        try:
            response = ollama.chat(model='qwen2.5:7b', messages=[{'role': 'user', 'content': user_input}])
            ai_response = response['message']['content']
            print(f"Qwen: {ai_response}")
            
            # Store output
            with open('conversation.log', 'a', encoding='utf-8') as f:
                f.write(f"You: {user_input}\nQwen: {ai_response}\n\n")
        except Exception as e:
            print(f"Error: {e}")

if __name__ == "__main__":
    main()