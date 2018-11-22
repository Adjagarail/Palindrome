function Palindrome(entree)
{
    var entree = prompt("Veillez saisir votre mot");
     entree_1 = [...entree].reverse().join('');
     if(entree === entree_1)
     {
         console.log(entree + 'est un palindrome');
     }
     else
         {
             console.log(entree + 'n\'est pas un palindrome');
         }
}
Palindrome();