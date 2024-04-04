
function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function() {
        const context = this,
              args = arguments;
        
        const later = () => {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };

        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Powyższa funkcja to standardowy zapis, który pomaga wywoływać funkcje z określonym przez nas opóźnieniem (szablon z internetu). 
// Dzięki temu mechanizmowi, funkcja przekazana do debounce będzie wywoływana dopiero po ustalonym czasie oczekiwania, a nie przy każdym wywołaniu. Jest to przydatne szczególnie w przypadku funkcji, które mogą być wywoływane często, np. w czasie przewijania strony czy zmiany rozmiaru okna przeglądarki.

const sliderImgs = document.querySelectorAll('.slide-in')

function checkSlide (e) {
    // console.log(e);
    // console.count(e)

    console.log(window.scrollY);
    // informacja ile jestśmy od góry okna przeglądarki
    sliderImgs.forEach(img => {
        const slideInAt = (window.scrollY + window.innerHeight)
        // ↑ to nam daje informację ile jesteśmy od dołu okna przeglądarki, bo tego właśnie potrzebujemy do tego projektu
    })

}

window.addEventListener('scroll', debounce(checkSlide))