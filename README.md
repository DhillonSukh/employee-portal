This project is a basic example of using Mobx as state management with typescript template in React.</br>
This project has 4 pages:</br>

1)<b>Home</b> – This is the first page shown on load and employees can be registered via this page.</br>

![image](https://user-images.githubusercontent.com/37818821/138383902-2878ca77-42f2-4481-917c-e4db5c0395eb.png)
 
2)<b>Employee List</b> – This page shows the list of registered employees</br>

 ![image](https://user-images.githubusercontent.com/37818821/138383928-5c87abb3-6b82-43ee-b72a-900188bd99a4.png)

3)<b>Employee Details</b> – This page shows the details of selected employee</br>

![image](https://user-images.githubusercontent.com/37818821/138383948-e21c1cb9-b109-4985-9a51-72568429d814.png)
 
4)<b>About</b> – pseudo page. Do not have much content.</br>

![image](https://user-images.githubusercontent.com/37818821/138383960-86f4c182-7d02-4d34-bc22-3015b8c5a26f.png)

Very first thing is install additional components :</br>
1)Install mobx – I have used Mobx for state management.</br>
	<b>npm install mobx</b></br>
2)Install mobx-react</br>
	<b>npm install mobx-react</b></br>
3)Install react-bootstrap</br>
	<b>npm install react-bootstrap</b></br>
4)Install react-router-dom – this is to use routing in react. </br>
	<b>npm install react-router-dom</b></br>
  
Important step is to create a store </br>

![image](https://user-images.githubusercontent.com/37818821/138385001-73ba5bcf-b364-4144-91f4-ef0d2b5d7266.png)

 and then create a context for the above store to use in App.tsx, so that we can use the store all over the app</br>
 
 ![image](https://user-images.githubusercontent.com/37818821/138385133-f0f5c5bb-c8e4-4adf-9e6f-1db2f75b10e2.png)




 



