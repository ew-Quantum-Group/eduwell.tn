
        document.addEventListener('DOMContentLoaded', function() {
            const habitItems = document.querySelectorAll('.habit-item');
            const continueBtnContainer = document.getElementById('continueBtnContainer');
            const continueBtn = document.getElementById('continueBtn');
            let selectedHabit = null;

            habitItems.forEach(item => {
                item.addEventListener('click', function() {
                    if (this.classList.contains('selected')) {
                        this.classList.remove('selected');
                        selectedHabit = null;
                        hideContinueButton();
                    } else {
                        if (selectedHabit) {
                            selectedHabit.classList.remove('selected');
                        }
                        this.classList.add('selected');
                        selectedHabit = this;
                        showContinueButton();
                    }
                });
            });

            function showContinueButton() {
                continueBtnContainer.style.height = '48px';
                setTimeout(() => {
                    continueBtn.classList.add('visible');
                }, 10);
            }

            function hideContinueButton() {
                continueBtn.classList.remove('visible');
                setTimeout(() => {
                    continueBtnContainer.style.height = '0';
                }, 300);
            }

            continueBtn.addEventListener('click', function() {
                if (!selectedHabit) return;
                
                this.style.transform = 'scale(0.96)';
                
                const link = selectedHabit.getAttribute('data-link');
                
                setTimeout(() => {
                    window.location.href = link;
                }, 200);
            });
        });
