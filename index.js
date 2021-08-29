// Import stylesheets
import './style.css';

const button = document.querySelector('button');

Rx.Observable.fromEvent(button, 'click').subscribe(value =>
  console.log(value.clientX)
);
