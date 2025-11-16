const correctAnswers = {
            q1: 'a',
            q2: 'b',
            q3: 'c',
            q4: 'b',
            q5: 'c'
        };
        
        const quizForm = document.getElementById('quiz-form');

        const resultsContainer = document.getElementById('results-container');
        

        quizForm.addEventListener('submit', function(event) {
      
            event.preventDefault();
            
            let score = 0;
            const totalQuestions = Object.keys(correctAnswers).length;
            
          
            for (const question in correctAnswers) {
       
                const questionBlock = document.getElementById(`${question}-block`);

                const selectedOption = quizForm.elements[question].value;
       
                questionBlock.classList.remove('correct', 'incorrect');
                
                if (selectedOption) {
           
                    if (selectedOption === correctAnswers[question]) {
                        score++;
        
                        questionBlock.classList.add('correct');
                    } else {
              
                        questionBlock.classList.add('incorrect');
                    }
                } else {
             
                    questionBlock.classList.add('incorrect');
                }
            }
      
            resultsContainer.innerHTML = `<h2>You scored ${score} out of ${totalQuestions}!</h2>`;
            resultsContainer.style.display = 'block';
        });