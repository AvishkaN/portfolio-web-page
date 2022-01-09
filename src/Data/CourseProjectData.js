const CourseProjectDataObj=[
    {
        id:'1'+Math.random(),
        name:"Bankist project",
        IsBuilding:false,
        backgroundImage:"https://raw.githubusercontent.com/AvishkaN/portfolio-web-page/master/src/assets/img/1-EcommerceProjectImage.png",
        description:"This project i build with udemy course",
        sections:[
            {
                title:"What course I did ?",
                list:[
                    "The Complete JavaScript Course 2022 From Zero to Expert  (in udemy)",
                ]
            },
              {
                title:"Project Description",
                list:[],
                paragraph:"Please enter user as 'js ' and password as ' 1' ",
                
            },
         
            {
                title:"Project Progress",
                list:[],
                // paragraph:"Lor",
                showProgress:true,
                ProgressPercentage:100,
                
            },
 
            {
                title:"Source File",
                list:[],
                paragraph:"",
                sourcefile:true,
                sourceFileLink:"https://github.com/AvishkaN/Bankist-app-udemy-course",
                
            },
            {
                title:"Porject View",
                list:[],
                paragraph:"",
                ProjectView:true,
                ProjectViewLink:"https://bankist-app-udemy.netlify.app/",
                
            },
      

        ]
    },
  
]

export default CourseProjectDataObj;
  


