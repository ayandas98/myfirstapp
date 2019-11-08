import { Component, OnInit } from '@angular/core';
import { Products } from '../model/interface';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }
  products: Array<Products> = [{
    name: 'Good Economics For Hard Times',
    image: 'https://rukminim1.flixcart.com/image/612/612/k20r8nk0/book/7/0/0/good-economics-for-hard-times-better-answers-to-our-biggest-original-imafhgvwd5gywez9.jpeg?q=70',
    description: 'Economics',
imgAltL: 'A',
isAvailable: true,
price: 250
 },
 

 {
  name: 'Attitude is Everything',
  image: 'https://rukminim1.flixcart.com/image/612/612/book/0/7/1/attitude-is-everything-change-your-attitudechange-your-life-original-imae7c3vt44hfvjr.jpeg?q=70',
  description: 'Self Help',
imgAltL: 'B',
isAvailable: true,
price: 550
},





{
  name: 'Victory is Yours',
  image: 'https://rukminim1.flixcart.com/image/612/612/jsdj8nk0/book/8/4/1/jeet-aapki-original-imafdyt84gjpx4zy.jpeg?q=70',
  description: 'Self Help',
imgAltL: 'c',
isAvailable: true,
price: 475
},


{
  name: 'Twelth Fail',
  image: 'https://rukminim1.flixcart.com/image/612/612/k0mqtu80/book/1/0/5/twelfth-fail-12th-fail-original-imafkdyjatg7ncqv.jpeg?q=70',
  description: 'Fiction',
imgAltL: 'd',
isAvailable: true,
price: 850
},


{
  name: 'Rich Dad Poor Dad',
  image: 'https://rukminim1.flixcart.com/image/612/612/jwwffrk0/book/7/3/8/rich-dad-poor-dad-original-imafhh4kcjk5tkzb.jpeg?q=70',
  description: 'self Help',
imgAltL: '',
isAvailable: true,
price: 950
},


{
  name: 'The Theory of Everything',
  image: 'https://rukminim1.flixcart.com/image/612/612/book/9/1/1/the-theory-of-everything-original-imadbgf6d45p2qzh.jpeg?q=70',
  description: 'Physics',
imgAltL: '',
isAvailable: true,
price: 559
}
];


  ngOnInit() {
  }





  
}
