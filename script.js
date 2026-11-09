function saluer(nom) {
    return 'Bonjour ' + nom + ' !';
}

// Export for Node.js tests
if (typeof module !== 'undefined') {
    module.exports = { saluer };
}

// Browser functionality
if (typeof document !== 'undefined') {
    document.getElementById('btn').addEventListener('click', function() {

        const nom = document.getElementById('nom').value || 'monde';

        document.getElementById('resultat').textContent = saluer(nom);

    });
}
