let age = prompt('Yoshingiz necha ?')

if ( age < 8) {
    alert('Siz hali ham kichkinasiz')
}
else if ( age < 18) {
    alert(`Siz hali ham o'rganishingiz kerak `)
}
else if (age < 60) {
    alert(`Siz hali ham ishlashingiz kerak`)
}
else if (age < 100) {
    alert(`Siz allaqachon nafaqaga chiqishingiz kerak`)
}
else {
    alert('WARNING')
}
