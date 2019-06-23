import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {
  title = 'Lorem Ipsum';
  content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec bibendum nisi. Mauris a commodo dui. Quisque interdum tellus sit amet mattis varius. Morbi viverra nulla sed euismod vulputate. Sed quis ligula eget dolor tincidunt imperdiet in eu libero. Sed non nisl libero. Nullam facilisis erat vitae nunc mattis, tempor lobortis dolor malesuada. Phasellus vehicula tortor a mi eleifend, at dignissim nisl scelerisque. Ut posuere tincidunt ligula, at faucibus nunc.\n' +
      '\n' +
      'Etiam a sapien et massa euismod varius. Integer vitae imperdiet orci, ut cursus orci. Praesent pellentesque metus eu viverra sodales. Nunc blandit lorem et ex pulvinar condimentum. Etiam at sagittis eros, non mattis diam. Fusce malesuada vehicula dictum. Aliquam erat volutpat. Donec ut vulputate metus. Suspendisse ut velit id leo pretium auctor. In mauris dui, molestie et sagittis eu, ullamcorper id leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia massa sit amet felis ultricies sodales.\n' +
      '\n' +
      'Vestibulum a augue lacus. Aenean condimentum turpis diam, eu suscipit sem tempor a. Maecenas enim massa, pellentesque sit amet commodo et, bibendum non orci. Vestibulum nec dolor id purus sagittis sagittis. Mauris varius, justo tempor tempus vestibulum, enim dui sollicitudin libero, id elementum mauris nibh eu nibh. Praesent pretium diam sit amet risus imperdiet tempor. Donec rutrum felis ut libero dictum, ullamcorper tristique felis sollicitudin. Proin finibus quam risus. Suspendisse pulvinar fermentum placerat.\n' +
      '\n' +
      'Maecenas a turpis et sapien tristique elementum ac sed tellus. Quisque feugiat scelerisque lacus, eget eleifend nibh suscipit sit amet. Vivamus facilisis, lorem a fringilla convallis, risus magna porta nisl, non porta erat nisl eu ligula. Praesent ac mi maximus, dictum ipsum venenatis, cursus ex. Praesent fringilla quam ac vulputate pharetra. Ut pellentesque ut est ac ornare. Nam vitae iaculis felis. Fusce tristique posuere diam, a euismod enim dictum a. Vivamus feugiat cursus faucibus.\n' +
      '\n' +
      'Nullam id libero id mauris varius mattis. Aenean eget mi ex. Nunc tincidunt tempus tortor, vel aliquet tellus. Maecenas lacinia tempus est. In vestibulum porttitor tempor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris leo nibh, imperdiet in congue non, rhoncus vitae justo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam vitae neque in purus iaculis ultricies. Maecenas ut interdum justo.\n' +
      '\n';
  short = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec bibendum nisi. Mauris a commodo dui. Quisque interdum tellus sit amet mattis varius. Morbi viverra nulla';
  questions = [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
      'Nullam id libero id mauris varius mattis?',
      ' Mauris nec bibendum nisi?',
  ]
  constructor() { }

  ngOnInit() {
  }

}
