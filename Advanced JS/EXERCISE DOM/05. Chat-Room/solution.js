function solve() {
   let input = document.getElementById('chat_input');
   let btn = document.getElementById('send');
   let div = document.getElementById('chat_messages')

   btn.addEventListener('click', () => {
       let message = input.value;

       let newDiv = document.createElement('div');

       newDiv.textContent = message;
       newDiv.className = 'message my-message'
       div.appendChild(newDiv);
       input.value = '';
    });
}


