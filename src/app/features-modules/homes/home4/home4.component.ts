import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-home4',
  templateUrl: './home4.component.html',
  styleUrls: ['./home4.component.scss']
})
export class Home4Component implements OnInit {



  hiredslidesOption: OwlOptions = {
    loop: true,
    margin: 30,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: [
      '<i class="fas fa-arrow-left"></i>',
      '<i class="fas fa-arrow-right"></i>'
    ],
    responsive: {
      0: {
        items: 1
      },
      768 : {
        items: 4
      },
      1170: {
        items: 4
      }
  },
    nav: true
  }
  hiredslides = [
    {
      image: 'assets/img/developer/developer-05.jpg',
      name: 'Megan Torres',
      role: 'Java Developer',
      rating: '5.0 (50)',
      time:"$64 / hr"
    },
    {
      image: 'assets/img/developer/developer-06.jpg',
      name: 'Nicole Black',
      role: '.net Developer',
      rating: '4.0 (20)',
      time:"$60 / hr"
    },
    {
      image: 'assets/img/developer/developer-07.jpg',
      name: 'Megan Torres',
      role: 'React Developer',
      rating: '5.0 (30)',
      time:"$64 / hr"
    },
    {
      image: 'assets/img/developer/developer-08.jpg',
      name: 'Shan Morris',
      role: 'Angular Developer',
      rating: '5.0 (30)',
      time:"$14 / hr"
    },
    {
      image: 'assets/img/developer/developer-07.jpg',
      name: 'Megan Torres',
      role: 'Java Developer',
      rating: '$17 / hr',
      time:"$14 / hr"
    },
    {
      image: 'assets/img/developer/developer-06.jpg',
      name: 'Nicole Black',
      role: '.net Developer',
      rating: '4.0 (20)',
      time:"$60 / hr"
    },
    {
      image: 'assets/img/developer/developer-07.jpg',
      name: 'Megan Torres',
      role: 'React Developer',
      rating: '5.0 (30)',
      time:"$64 / hr"
    },
    {
      image: 'assets/img/developer/developer-06.jpg',
      name: 'Nicole Black',
      role: '.net Developer',
      rating: '4.0 (20)',
      time:"$60 / hr"
    },
    {
      image: 'assets/img/developer/developer-06.jpg',
      name: 'Nicole Black',
      role: '.net Developer',
      rating: '4.0 (20)',
      time:"$60 / hr"
    },
  ]

  
  selected = 'freelancers';
  getLink = "project"
  slideConfig={
    slidesToShow: 1,
    SlidesToScroll: 1,
    asNavFor:'.client-img',
    dots: false,
    nav: false
  }
  slideConfig2={
    slidesToShow: 4,
    SlidesToScroll: 1,
    asNavFor:'.say-about',
    dots: false,
    nav: false,
    centerMode:true,
    infinite: true,
    focusOnSelect: true
  }
  customOption: OwlOptions = {
    loop: true,
    margin: 30,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: [
      '<i class="fas fa-arrow-left"></i>',
      '<i class="fas fa-arrow-right"></i>'
    ],
    responsive: {
      0: {
        items: 1
      },
      768 : {
        items: 1
      },
      1170: {
        items: 1
      }
  },
    nav: true
  }
  images = [
    {
      img: 'assets/img/quote-01.svg',
      img1: 'assets/img/user/avatar-1.jpg',
      name: 'Ramen Daren',
      para: '“ Lorem ipsum dolor sit amet consectetur. Vitae amet cras nulla mi laoreet quis amet phasellus. Enim orci lacus quam mauris nunc ultrices duis. Ornare leo mi aenean egestas montes cras. Egestas erat viverra scelerisque bibendum. “',
      domain: 'Wordpress developer'
    },
    {
      img: 'assets/img/quote-01.svg',
      img1: 'assets/img/user/avatar-2.jpg',
      name: 'Ramen Daren',
      para: '“ Vitae amet cras nulla mi laoreet quis amet phasellus. Enim orci lacus quam mauris nunc ultrices duis. Ornare leo mi aenean egestas montes cras.Vitae amet cras nulla mi laoreet quis amet phasellus. Enim orci lacus quam mauris nunc ultrices duis. Ornare leo mi aenean egestas montes cras. Egestas erat viverra scelerisque bibendum. “',
      domain: 'Wordpress developer'
    },
    {
      img: 'assets/img/quote-01.svg',
      img1: 'assets/img/user/avatar-3.jpg',
      name: 'Ramen Daren',
      para: '“  Egestas erat viverra scelerisque bibendum.Lorem ipsum dolor sit amet consectetur. Vitae amet cras nulla mi laoreet quis amet phasellus. Enim orci lacus quam mauris nunc ultrices duis. Ornare leo mi aenean egestas montes cras. Egestas erat viverra scelerisque bibendum. “',
      domain: 'Wordpress developer'
    },
    {
      img: 'assets/img/quote-01.svg',
      img1: 'assets/img/user/avatar-4.jpg',
      name: 'Ramen Daren',
      para: '“ Lorem ipsum dolor sit amet consectetur. Vitae amet cras nulla mi laoreet quis amet phasellus. Enim orci lacus quam mauris nunc ultrices duis. Ornare leo mi aenean egestas montes cras. Egestas erat viverra scelerisque bibendum. “',
      domain: 'Wordpress developer'
    },
    {
      img: 'assets/img/quote-01.svg',
      img1: 'assets/img/user/avatar-5.jpg',
      name: 'Ramen Daren',
      para: '“  Egestas erat viverra scelerisque bibendum. Vitae amet cras nulla mi laoreet quis amet phasellus. Enim orci lacus quam mauris nunc ultrices duis. Ornare leo mi aenean egestas montes cras. Egestas erat viverra scelerisque bibendum. “',
      domain: 'Wordpress developer'
    }
    
  ]
  projectsOptions: OwlOptions = {
    loop: true,
    margin: 30,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: [
      '<i class="fas fa-arrow-left"></i>',
      '<i class="fas fa-arrow-right"></i>'
    ],
    responsive: {
      0: {
        items: 1
      },
      768 : {
        items: 3
      },
      1170: {
        items: 3
      }
  },
    nav: true
  }
 projects=[
  {
   img: "assets/img/project/project-29.jpg",
   department:"UI/UX for Cryptocurrency Exchange",
   domain:"Web Development",
   listbox1:"Figma",
   listbox2:"Adobe Xd",
   amount:"$80 - $180",
   time:"/hour",
   para:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur"
  },
  {
    img: "assets/img/project/project-30.jpg",
    department:"Website Design for a Consumer Shop",
    domain:"Angular Development",
    listbox1:"Angular",
    listbox2:"Adobe Xd",
    amount:"$40 - $80",
    time:"/hour",
    para:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur"
   },
   {
    img: "assets/img/project/project-31.jpg",
    department:"Build a Coaching Website Product ",
    domain:"Node JS Development",
    listbox1:"Figma",
    listbox2:"Node JS",
    amount:"$60 - $120",
    time:"/hour",
    para:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur"
   },
   {
    img: "assets/img/project/project-30.jpg",
    department:"Website Design for a Consumer Shop",
    domain:"Angular Development",
    listbox1:"Angular",
    listbox2:"Node JS",
    amount:"$40 - $80",
    time:"/hour",
    para:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur"
   },
   {
    img: "assets/img/project/project-29.jpg",
    department:"UI/UX for Cryptocurrency Exchange",
    domain:"Web Development",
    listbox1:"Figma",
    listbox2:"Adobe Xd",
    amount:"$80 - $180",
    time:"/hour",
    para:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur"
   },
   {
    img: "assets/img/project/project-31.jpg",
    department:"Build a Coaching Website Product ",
    domain:"Node JS Development",
    listbox1:"Figma",
    listbox2:"Adobe Xd",
    amount:"$80 - $180",
    time:"/hour",
    para:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur"
   },

 ]
 blogOptions: OwlOptions = {
  loop: true,
  margin: 30,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: true,
  dots: false,
  navSpeed: 700,
  navText: [
    '<i class="fas fa-arrow-left"></i>',
    '<i class="fas fa-arrow-right"></i>'
  ],
  responsive: {
    0: {
      items: 1
    },
    768 : {
      items: 3
    },
    1170: {
      items: 3
    }
},
  nav: true
}
 blog=[
  {
    blogimg:"assets/img/blog/blog-15.jpg",
    department:"Production",
    date:"13, Dec2022",
    para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet.",
    statement:"Lorem ipsum dolor sit amet consectetur. Vitae amet cras nulla mi laoreet quis amet phasellus...."
  },
  {
    blogimg:"assets/img/blog/blog-16.jpg",
    department:"Jobs",
    date:"12, Dec2022",
    para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet.",
    statement:"Lorem ipsum dolor sit amet consectetur. Vitae amet cras nulla mi laoreet quis amet phasellus...."
  },
  {
    blogimg:"assets/img/blog/blog-17.jpg",
    department:"Production",
    date:"10, Dec2022",
    para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet.",
    statement:"Lorem ipsum dolor sit amet consectetur. Vitae amet cras nulla mi laoreet quis amet phasellus...."
  },
  {
    blogimg:"assets/img/blog/blog-16.jpg",
    department:"Jobs",
    date:"12, Dec2022",
    para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet.",
    statement:"Lorem ipsum dolor sit amet consectetur. Vitae amet cras nulla mi laoreet quis amet phasellus...."
  },
  {
    blogimg:"assets/img/blog/blog-17.jpg",
    department:"Production",
    date:"10, Dec2022",
    para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet.",
    statement:"Lorem ipsum dolor sit amet consectetur. Vitae amet cras nulla mi laoreet quis amet phasellus...."
  }
 ]
 companyOptions: OwlOptions = {
  loop: true,
  margin: 30,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: true,
  dots: false,
  navSpeed: 700,
  navText: ['<i class="fas fa-chevron-left"></i>',
  '<i class="fas fa-chevron-right"></i>'],
  responsive: {
    0: {
      items: 1
    },
    768 : {
      items: 6
    },
    1170: {
      items: 6
    }
  },
  nav: true
}

companyslides=[
  {
    img:"assets/img/company-logo-01.svg"
  },
  {
    img:"assets/img/company-logo-02.svg"
  },
  {
    img:"assets/img/company-logo-03.svg"
  },
  {
    img:"assets/img/company-logo-04.svg"
  },
  {
    img:"assets/img/company-logo-05.svg",
  },
  {
    img:"assets/img/company-logo-06.svg",
  }

]
  constructor( private router:Router) { }
  ngOnInit(): void {
    AOS.init({
      duration: 1200,
      once: true,
    });
  //   window.addEventListener("resize", function (event) {
  //     // if (window.innerWidth > 991) {
  //     //     (document.getElementById('windows')as HTMLDivElement).classList.remove('menu-opened');
  //     //     (document.getElementById('sidebar')as HTMLDivElement).classList.remove('opened');
  //     //     let x=document.querySelectorAll<HTMLElement>('.submenu') ;
  //     //     x.forEach((element) => {
  //     //       element.style.display="block";
  //     //     });        
  //     // }else {
  //     //   let x=document.querySelectorAll<HTMLElement>('.submenu') ;
  //     //     x.forEach((element) => {
  //     //       element.style.display="none";

  //     //     });
  //     // }
  // })

  }
  search(){
    if(this.selected === 'projects'){
      this.router.navigateByUrl('/freelancer/project')
    }else if(this.selected === 'freelancers'){
      this.router.navigateByUrl('/freelancer/project')
    }
  }
}
