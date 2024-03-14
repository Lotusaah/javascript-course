function countWords(words) {
  const results = {};
  for (i = 0; i < words.length; i++) {
    const word = words[i];

    if (!results[word]) { 
      results[word] = 1;}
    else {
    results[word]++;
    }
  }
}
console.log(['apple','apple','grape','apple','grape']);