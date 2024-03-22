$(document).ready(function() {
    // Aplicando máscara para o campo de telefone
    $('#phone').inputmask('(99) 99999-9999', { clearIncomplete: true });

    // Manipulando o envio do formulário
    $('#contact-form').submit(function(event) {
        // Evita o comportamento padrão de envio do formulário
        event.preventDefault();

        // Limpa os campos do formulário
        $(this).find('input, textarea, select').val('');

        // Exibir uma mensagem de sucesso ou redirecionar para uma página de agradecimento
        alert('Formulário enviado com sucesso!');
    });
});
