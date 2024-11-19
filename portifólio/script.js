document.getElementById('interessesButton').addEventListener('click', function() {
    toggleTextBox('interessesButton', 'interessesTextBox');
});

document.getElementById('formacaoButton').addEventListener('click', function() {
    toggleTextBox('formacaoButton', 'formacaoTextBox');
});

document.getElementById('skillsButton').addEventListener('click', function() {
    toggleTextBox('skillsButton', 'skillsTextBox');
});

document.getElementById('sobreButton').addEventListener('click', function() {
    toggleTextBox('sobreButton', 'sobreTextBox');
});

function toggleTextBox(buttonId, textBoxId) {
    const buttons = ['interessesButton', 'formacaoButton', 'skillsButton', 'sobreButton'];
    const textBoxes = ['interessesTextBox', 'formacaoTextBox', 'skillsTextBox', 'sobreTextBox'];

    // Fechar todas as caixas de texto, exceto a que foi clicada
    textBoxes.forEach(function(id) {
        if (id !== textBoxId) {
            const textBox = document.getElementById(id);
            textBox.style.display = 'none';
        }
    });

    // Remover o símbolo de todas as caixas de texto, exceto a que foi clicada
    buttons.forEach(function(id) {
        if (id !== buttonId) {
            const button = document.getElementById(id);
            button.innerHTML = button.innerHTML.replace(' △', '▽');
        }
    });

    // Alternar a visibilidade da caixa de texto correspondente ao botão clicado
    const button = document.getElementById(buttonId);
    const textBox = document.getElementById(textBoxId);
    const isVisible = textBox.style.display === 'block';

    textBox.style.display = isVisible ? 'none' : 'block';
    button.innerHTML = isVisible ? button.innerHTML.replace(' △', '▽') : button.innerHTML.replace('▽', ' △');}
