import { annotate, annotationGroup} from 'https://unpkg.com/rough-notation?module';

document.addEventListener('DOMContentLoaded', () => {

    const name = document.querySelector('#name');
    const a1 = annotate(name, { type: 'highlight', color: '#f7d1d0'});

    function highlightName() {
        a1.show();
        setTimeout(() => a1.hide(), 3000)
    }

    highlightName()
    setInterval(highlightName, 6000)

    const wordsToHighlight = [
        { id: "software-engineer", color: "#f7d1d0" },
        { id: "problem-solving", color: "#f7d1d0" },
        { id: "bootcamp", color: "#f7d1d0" },
        { id: "web-apps", color: "#f7d1d0" },
        { id: "new-tech", color: "#f7d1d0" },
        { id: "refining-skills", color: "#f7d1d0" }
    ];

    const annotations = wordsToHighlight.map(({id, color}) => {
        const element =document.getElementById(id)
        return annotate(element, {type: 'highlight', color})
    })

    const ag = annotationGroup(annotations)

    function cycleHighlights() {
        ag.hide()
        setTimeout(() => ag.show(), 8000)
    }

    setInterval(cycleHighlights, 8000)
    ag.show()

    const contact = document.querySelector('#contact-highlight')
    const underlineContact = annotate(contact, {type: 'underline', color: 'black'})

    function contactHighlight () {
        underlineContact.hide()
        setTimeout(() =>underlineContact.show(), 5000 )
    }
    setInterval(contactHighlight, 4000)
    underlineContact.show()

});