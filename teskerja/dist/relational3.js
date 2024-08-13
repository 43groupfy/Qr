const questions = [

    { question: "Anton lebih tinggi dari Indra. <br>Indra lebih tinggi dari Zaki. <br>Maka siapa yang paling tinggi di antara mereka?", options: ["Anton", "Indra", "Zaki"], correctIndex: 0 },

    { question: "Budi lebih pendek dari Bagas. <br>Budi lebih tinggi dari Rudi. <br>Maka siapa yang paling tinggi di antara mereka?", options: ["Budi", "Bagas", "Rudi"], correctIndex: 1 },

    { question: "Rendi lebih pendek dari Doni. <br>Doni lebih pendek dari Ilham. <br>Maka siapa yang paling tinggi di antara mereka?", options: ["Rendi", "Doni", "Ilham"], correctIndex: 2 },

    { question: "Dika lebih tinggi dari Jona. <br>Jona lebih tinggi dari Riski. <br>Maka siapa yang paling tinggi di antara mereka?", options: ["Dika", "Riski", "Jona"], correctIndex: 0 },

    { question: "Andi lebih pendek dari Adi. <br>Adi lebih tinggi dari Salim. <br>Maka siapa yang paling tinggi di antara mereka?", options: ["Andi", "Salim", "Adi"], correctIndex: 2 },

    { question: "Surya lebih pendek dari Riko. <br>Surya lebih tinggi dari Anwar. <br>Maka siapa yang paling tinggi di antara mereka?", options: ["Surya", "Anwar", "Riko"], correctIndex: 2 },

    { question: "Anton lebih tinggi dari Indra. <br>Indra lebih tinggi dari Zaki. <br>Maka siapa yang paling pendek di antara mereka?", options: ["Anton", "Indra", "Zaki"], correctIndex: 2 },

    { question: "Budi lebih pendek dari Bagas. <br>Budi lebih tinggi dari Rudi. <br>Maka siapa yang paling pendek di antara mereka?", options: ["Budi", "Bagas", "Rudi"], correctIndex: 2 },

    { question: "Rendi lebih pendek dari Doni. <br>Doni lebih pendek dari Ilham. <br>Maka siapa yang paling pendek di antara mereka?", options: ["Rendi", "Doni", "Ilham"], correctIndex: 0 },

    { question: "Dika lebih tinggi dari Jona. <br>Jona lebih tinggi dari Riski. <br>Maka siapa yang paling pendek di antara mereka?", options: ["Dika", "Riski", "Jona"], correctIndex: 1 },

    { question: "Andi lebih pendek dari Adi. <br>Adi lebih tinggi dari Salim. <br>Maka siapa yang paling pendek di antara mereka?", options: ["Andi", "Salim", "Adi"], correctIndex: 0 },

    { question: "Surya lebih pendek dari Riko. <br>Surya lebih tinggi dari Anwar. <br>Maka siapa yang paling pendek di antara mereka?", options: ["Surya", "Anwar", "Riko"], correctIndex: 1 },

{ question: "Anton lebih berat dari Indra. <br>Indra lebih berat dari Zaki. <br>Maka siapa yang paling berat di antara mereka?", options: ["Anton", "Indra", "Zaki"], correctIndex: 0 },

    { question: "Budi lebih ringan dari Bagas. <br>Budi lebih berat dari Rudi. <br>Maka siapa yang paling berat di antara mereka?", options: ["Budi", "Bagas", "Rudi"], correctIndex: 1 },

    { question: "Rendi lebih ringan dari Doni. <br>Doni lebih ringan dari Ilham. <br>Maka siapa yang paling berat di antara mereka?", options: ["Rendi", "Doni", "Ilham"], correctIndex: 2 },

    { question: "Dika lebih berat dari Jona. <br>Jona lebih berat dari Riski. <br>Maka siapa yang paling berat di antara mereka?", options: ["Dika", "Riski", "Jona"], correctIndex: 0 },

    { question: "Andi lebih ringan dari Adi. <br>Adi lebih berat dari Salim. <br>Maka siapa yang paling berat di antara mereka?", options: ["Andi", "Salim", "Adi"], correctIndex: 2 },

    { question: "Surya lebih ringan dari Riko. <br>Surya lebih berat dari Anwar. <br>Maka siapa yang paling berat di antara mereka?", options: ["Surya", "Anwar", "Riko"], correctIndex: 2 },

    { question: "Anton lebih berat dari Indra. <br>Indra lebih berat dari Zaki. <br>Maka siapa yang paling ringan di antara mereka?", options: ["Anton", "Indra", "Zaki"], correctIndex: 2 },

    { question: "Budi lebih ringan dari Bagas. <br>Budi lebih berat dari Rudi. <br>Maka siapa yang paling ringan di antara mereka?", options: ["Budi", "Bagas", "Rudi"], correctIndex: 2 },

    { question: "Rendi lebih ringan dari Doni. <br>Doni lebih ringan dari Ilham. <br>Maka siapa yang paling ringan di antara mereka?", options: ["Rendi", "Doni", "Ilham"], correctIndex: 0 },

    { question: "Dika lebih berat dari Jona. <br>Jona lebih berat dari Riski. <br>Maka siapa yang paling ringan di antara mereka?", options: ["Dika", "Riski", "Jona"], correctIndex: 1 },

    { question: "Andi lebih ringan dari Adi. <br>Adi lebih berat dari Salim. <br>Maka siapa yang paling ringan di antara mereka?", options: ["Andi", "Salim", "Adi"], correctIndex: 0 },

    { question: "Surya lebih ringan dari Riko. <br>Surya lebih berat dari Anwar. <br>Maka siapa yang paling ringan di antara mereka?", options: ["Surya", "Anwar", "Riko"], correctIndex: 1 },



    { question: "Anton lebih tua dari Indra. <br>Indra lebih tua dari Zaki. <br>Maka siapa yang paling tua di antara mereka?", options: ["Anton", "Indra", "Zaki"], correctIndex: 0 },

    { question: "Budi lebih muda dari Bagas. <br>Budi lebih tua dari Rudi. <br>Maka siapa yang paling tua di antara mereka?", options: ["Budi", "Bagas", "Rudi"], correctIndex: 1 },

    { question: "Rendi lebih muda dari Doni. <br>Doni lebih muda dari Ilham. <br>Maka siapa yang paling tua di antara mereka?", options: ["Rendi", "Doni", "Ilham"], correctIndex: 2 },

    { question: "Dika lebih tua dari Jona. <br>Jona lebih tua dari Riski. <br>Maka siapa yang paling tua di antara mereka?", options: ["Dika", "Riski", "Jona"], correctIndex: 0 },

    { question: "Andi lebih muda dari Adi. <br>Adi lebih tua dari Salim. <br>Maka siapa yang paling tua di antara mereka?", options: ["Andi", "Salim", "Adi"], correctIndex: 2 },

    { question: "Surya lebih muda dari Riko. <br>Surya lebih tua dari Anwar. <br>Maka siapa yang paling tua di antara mereka?", options: ["Surya", "Anwar", "Riko"], correctIndex: 2 },

    { question: "Anton lebih tua dari Indra. <br>Indra lebih tua dari Zaki. <br>Maka siapa yang paling muda di antara mereka?", options: ["Anton", "Indra", "Zaki"], correctIndex: 2 },

    { question: "Budi lebih muda dari Bagas. <br>Budi lebih tua dari Rudi. <br>Maka siapa yang paling muda di antara mereka?", options: ["Budi", "Bagas", "Rudi"], correctIndex: 2 },

    { question: "Rendi lebih muda dari Doni. <br>Doni lebih muda dari Ilham. <br>Maka siapa yang paling muda di antara mereka?", options: ["Rendi", "Doni", "Ilham"], correctIndex: 0 },

    { question: "Dika lebih tua dari Jona. <br>Jona lebih tua dari Riski. <br>Maka siapa yang paling muda di antara mereka?", options: ["Dika", "Riski", "Jona"], correctIndex: 1 },

    { question: "Andi lebih muda dari Adi. <br>Adi lebih tua dari Salim. <br>Maka siapa yang paling muda di antara mereka?", options: ["Andi", "Salim", "Adi"], correctIndex: 0 },

    { question: "Surya lebih muda dari Riko. <br>Surya lebih tua dari Anwar. <br>Maka siapa yang paling muda di antara mereka?", options: ["Surya", "Anwar", "Riko"], correctIndex: 1 },


    { question: "Anton lebih cepat dari Indra. <br>Indra lebih cepat dari Zaki. <br>Maka siapa yang paling cepat di antara mereka?", options: ["Anton", "Indra", "Zaki"], correctIndex: 0 },

    { question: "Budi lebih lambat dari Bagas. <br>Budi lebih cepat dari Rudi. <br>Maka siapa yang paling cepat di antara mereka?", options: ["Budi", "Bagas", "Rudi"], correctIndex: 1 },

    { question: "Rendi lebih lambat dari Doni. <br>Doni lebih lambat dari Ilham. <br>Maka siapa yang paling cepat di antara mereka?", options: ["Rendi", "Doni", "Ilham"], correctIndex: 2 },

    { question: "Dika lebih cepat dari Jona. <br>Jona lebih cepat dari Riski. <br>Maka siapa yang paling cepat di antara mereka?", options: ["Dika", "Riski", "Jona"], correctIndex: 0 },

    { question: "Andi lebih lambat dari Adi. <br>Adi lebih cepat dari Salim. <br>Maka siapa yang paling cepat di antara mereka?", options: ["Andi", "Salim", "Adi"], correctIndex: 2 },

    { question: "Surya lebih lambat dari Riko. <br>Surya lebih cepat dari Anwar. <br>Maka siapa yang paling cepat di antara mereka?", options: ["Surya", "Anwar", "Riko"], correctIndex: 2 },

    { question: "Anton lebih cepat dari Indra. <br>Indra lebih cepat dari Zaki. <br>Maka siapa yang paling lambat di antara mereka?", options: ["Anton", "Indra", "Zaki"], correctIndex: 2 },

    { question: "Budi lebih lambat dari Bagas. <br>Budi lebih cepat dari Rudi. <br>Maka siapa yang paling lambat di antara mereka?", options: ["Budi", "Bagas", "Rudi"], correctIndex: 2 },

    { question: "Rendi lebih lambat dari Doni. <br>Doni lebih lambat dari Ilham. <br>Maka siapa yang paling lambat di antara mereka?", options: ["Rendi", "Doni", "Ilham"], correctIndex: 0 },

    { question: "Dika lebih cepat dari Jona. <br>Jona lebih cepat dari Riski. <br>Maka siapa yang paling lambat di antara mereka?", options: ["Dika", "Riski", "Jona"], correctIndex: 1 },

    { question: "Andi lebih lambat dari Adi. <br>Adi lebih cepat dari Salim. <br>Maka siapa yang paling lambat di antara mereka?", options: ["Andi", "Salim", "Adi"], correctIndex: 0 },

    { question: "Surya lebih lambat dari Riko. <br>Surya lebih cepat dari Anwar. <br>Maka siapa yang paling lambat di antara mereka?", options: ["Surya", "Anwar", "Riko"], correctIndex: 1 },


    { question: "Anton lebih kuat dari Indra. <br>Indra lebih kuat dari Zaki. <br>Maka siapa yang paling kuat di antara mereka?", options: ["Anton", "Indra", "Zaki"], correctIndex: 0 },

    { question: "Budi lebih lemah dari Bagas. <br>Budi lebih kuat dari Rudi. <br>Maka siapa yang paling kuat di antara mereka?", options: ["Budi", "Bagas", "Rudi"], correctIndex: 1 },

    { question: "Rendi lebih lemah dari Doni. <br>Doni lebih lemah dari Ilham. <br>Maka siapa yang paling kuat di antara mereka?", options: ["Rendi", "Doni", "Ilham"], correctIndex: 2 },

    { question: "Dika lebih kuat dari Jona. <br>Jona lebih kuat dari Riski. <br>Maka siapa yang paling kuat di antara mereka?", options: ["Dika", "Riski", "Jona"], correctIndex: 0 },

    { question: "Andi lebih lemah dari Adi. <br>Adi lebih kuat dari Salim. <br>Maka siapa yang paling kuat di antara mereka?", options: ["Andi", "Salim", "Adi"], correctIndex: 2 },

    { question: "Surya lebih lemah dari Riko. <br>Surya lebih kuat dari Anwar. <br>Maka siapa yang paling kuat di antara mereka?", options: ["Surya", "Anwar", "Riko"], correctIndex: 2 },

    { question: "Anton lebih kuat dari Indra. <br>Indra lebih kuat dari Zaki. <br>Maka siapa yang paling lemah di antara mereka?", options: ["Anton", "Indra", "Zaki"], correctIndex: 2 },

    { question: "Budi lebih lemah dari Bagas. <br>Budi lebih kuat dari Rudi. <br>Maka siapa yang paling lemah di antara mereka?", options: ["Budi", "Bagas", "Rudi"], correctIndex: 2 },

    { question: "Rendi lebih lemah dari Doni. <br>Doni lebih lemah dari Ilham. <br>Maka siapa yang paling lemah di antara mereka?", options: ["Rendi", "Doni", "Ilham"], correctIndex: 0 },

    { question: "Dika lebih kuat dari Jona. <br>Jona lebih kuat dari Riski. <br>Maka siapa yang paling lemah di antara mereka?", options: ["Dika", "Riski", "Jona"], correctIndex: 1 },

    { question: "Andi lebih lemah dari Adi. <br>Adi lebih kuat dari Salim. <br>Maka siapa yang paling lemah di antara mereka?", options: ["Andi", "Salim", "Adi"], correctIndex: 0 },

    { question: "Surya lebih lemah dari Riko. <br>Surya lebih kuat dari Anwar. <br>Maka siapa yang paling lemah di antara mereka?", options: ["Surya", "Anwar", "Riko"], correctIndex: 1 },

];


