function toggleEvents() {
    var moreEvents = document.getElementById('moreEvents');
    var btn = document.getElementById('showMoreBtn');
    if (moreEvents.style.display === 'none') {
        moreEvents.style.display = 'flex';
        btn.innerText = 'Show Less';
    } else {
        moreEvents.style.display = 'none';
        btn.innerText = 'Show More';
    }
}
