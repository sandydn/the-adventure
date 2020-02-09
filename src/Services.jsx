// Renvoie un entier aléatoire
// entre une valeur min (incluse)
// et une valeur max (incluse)
export function randomDice(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min +1)) + min
}

// Stock les données dans le navigateur
export function saveCharacter(name, strenght, health, chance) {
  localStorage.setItem('name', name)
  localStorage.setItem('strenght', strenght)
  localStorage.setItem('health', health)
  localStorage.setItem('chance', chance)
}

// Enlève les données du navigateur
export function deleteCharacter() { 
  localStorage.clear()
}