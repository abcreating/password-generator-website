    <script>
        document.getElementById('generateBtn').addEventListener('click', function () {
            const length = parseInt(document.getElementById('length').value);
            if (isNaN(length) || length < 1 || length > 100) {
                alert('Please enter a valid password length between 1 and 100.');
                return;
            }

            const includeUppercase = document.getElementById('includeUppercase').checked;
            const includeNumbers = document.getElementById('includeNumbers').checked;
            const includeSymbols = document.getElementById('includeSymbols').checked;

            const password = generatePassword(length, includeUppercase, includeNumbers, includeSymbols);
            document.getElementById('passwordOutput').innerText = password;
            document.getElementById('copyBtn').style.display = 'inline-block'; // Show copy button
        });

        function generatePassword(length, includeUppercase, includeNumbers, includeSymbols) {
            const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
            const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            const numberChars = '0123456789';
            const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';

            let charPool = lowercaseChars;
            if (includeUppercase) charPool += uppercaseChars;
            if (includeNumbers) charPool += numberChars;
            if (includeSymbols) charPool += symbolChars;

            if (charPool.length === 0) {
                return 'Please select at least one character type.';
            }

            let password = '';
            for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(Math.random() * charPool.length);
                password += charPool[randomIndex];
            }

            return password;
        }

        document.getElementById('copyBtn').addEventListener('click', function () {
            const password = document.getElementById('passwordOutput').innerText;
            if (password && password !== 'Your password will appear here') {
                navigator.clipboard.writeText(password).then(() => {
                    alert('Password copied to clipboard!');
                }).catch(err => {
                    console.error('Failed to copy: ', err);
                });
            } else {
                alert('No password to copy.');
            }
        });
    </script>