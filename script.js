import { annotate, annotationGroup} from 'https://unpkg.com/rough-notation?module';

document.addEventListener('DOMContentLoaded', () => {

    if (window.innerWidth <= 768) {
        return;
    }

    const name = document.querySelector('#name');
    const a1 = annotate(name, { type: 'highlight', color: '#f7d1d0' });

    function highlightName() {
            a1.show();
            setTimeout(() => a1.hide(), 3000);
    }

    highlightName();
    setInterval(highlightName, 6000);

    const wordsToHighlight = [
        { id: "software-engineer", color: "#f7d1d0" },
        { id: "problem-solving", color: "#f7d1d0" },
        { id: "bootcamp", color: "#f7d1d0" },
        { id: "web-apps", color: "#f7d1d0" },
        { id: "new-tech", color: "#f7d1d0" },
        { id: "refining-skills", color: "#f7d1d0" }
    ];

    const annotations = wordsToHighlight.map(({ id, color }) => {
        const element = document.getElementById(id);
        if (window.innerWidth > 768) {
            return annotate(element, { type: 'highlight', color });
        }
    }).filter(Boolean);

    const ag = annotationGroup(annotations);

    function cycleHighlights() {
        if (window.innerWidth > 768) {
            ag.hide();
            setTimeout(() => ag.show(), 8000);
        }
    }

    setInterval(cycleHighlights, 8000);
    ag.show();

    const contact = document.querySelector('#contact-highlight');
    const underlineContact = annotate(contact, { type: 'underline', color: 'black' });

    function contactHighlight() {
        if (window.innerWidth > 768) {
            underlineContact.hide();
            setTimeout(() => underlineContact.show(), 5000);
        }
    }
    setInterval(contactHighlight, 4000);
    underlineContact.show();

});