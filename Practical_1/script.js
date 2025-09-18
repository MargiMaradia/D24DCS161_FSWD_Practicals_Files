const votes = {
    JavaScript: 0,
    Python: 0,
    Java: 0
  };
  
  function vote(language) {
    votes[language]++;
    updateVotes();
  }
  
  function updateVotes() {
    for (let lang in votes) {
      document.getElementById(lang).textContent = votes[lang];
    }
  }
  
  setInterval(() => {
    const langs = Object.keys(votes);
    const randomLang = langs[Math.floor(Math.random() * langs.length)];
    votes[randomLang]++;
    updateVotes();
  }, 2000);
  