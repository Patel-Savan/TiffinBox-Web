<!--- The following README.md sample file was adapted from https://gist.github.com/PurpleBooth/109311bb0361f32d87a2#file-readme-template-md by Gabriella Mosquera for academic use --->


# Assignment 3

- _Date Created_: 30 July 2024

- _Last Modification Date_: 30 July 2024

* *Assignment Frontend URL (Deployed Application)*: [https://main--tiffinbox-csci5709.netlify.app/](https://main--tiffinbox-csci5709.netlify.app)

* *Assignment Backend URL (Deployed Application)*: [https://tiffin-box.onrender.com](https://tiffin-box.onrender.com)

- _Git URL of Group Repo._: [<https://git.cs.dal.ca/rkp/csci-5709-grp-04>](https://git.cs.dal.ca/rkp/csci-5709-grp-04)

- _Git URL of my Branch._: [<https://git.cs.dal.ca/rkp/csci-5709-grp-04/-/tree/Savan_Maheshkumar_Patel?ref_type=heads>](https://git.cs.dal.ca/rkp/csci-5709-grp-04/-/tree/Savan_Maheshkumar_Patel?ref_type=heads)

## Author

- [Savan Maheshkumar Patel](sv272995@dal.ca)

## Completed feature and related tasks

**Feature:** Meal Menu Management

**Tasks:**

***User Role: Food Service Provider***
1. Add a Meal. (Needs login)
2. View All the Current Meals. (Needs Login)
3. Update an existing Meal. (Needs login)
4. Delete an existing Meal. (Needs Login)

***User Role: Customer***
1. Search Food Service Providers.(Needs Login)
2. View List of Meals offered by Food Service Providers.(Needs Login)
3. View Details of a Meal offered by Meal Service Provider. (Needs Login)  

## List of files created

**Backend**
1.  backend\src\main\java\com\tiffinbox\backend\controllers\CustomerController.java
2.  backend\src\main\java\com\tiffinbox\backend\controllers\FoodServiceProviderController.java
3.  backend\src\main\java\com\tiffinbox\backend\dto\MealResponseDTO.java
4.  backend\src\main\java\com\tiffinbox\backend\dto\FoodProviderResponseDTO.java
5.  backend\src\main\java\com\tiffinbox\backend\dto\request\AddMealRequest.java
6.  backend\src\main\java\com\tiffinbox\backend\dto\response\mealmenumanagement\GetASingleFoodProvider.java
7.  backend\src\main\java\com\tiffinbox\backend\dto\response\mealmenumanagement\GetASingleMealResponse.java
8.  backend\src\main\java\com\tiffinbox\backend\dto\response\mealmenumanagement\GetFoodProviderListResponse.java
9.  backend\src\main\java\com\tiffinbox\backend\dto\response\mealmenumanagement\GetMealListResponse.java
10. backend\src\main\java\com\tiffinbox\backend\repositories\MealRepository.java
11. backend\src\main\java\com\tiffinbox\backend\services\ICustomerService.java
12. backend\src\main\java\com\tiffinbox\backend\services\IFoodProviderService.java
13. backend\src\main\java\com\tiffinbox\backend\services\impl\CustomerServiceImpl.java
14. backend\src\main\java\com\tiffinbox\backend\services\impl\FoodProviderServiceImpl.java

**Frontend**

1. frontend\src\components\Customer\FoodProviderCard.jsx
2. frontend\src\components\FoodServiceProvider\MealCard.jsx
3. frontend\src\contexts\CustomerMealContext\action.jsx
4. frontend\src\contexts\CustomerMealContext\CustomerMealContext.jsx
5. frontend\src\contexts\CustomerMealContext\reducer.jsx
6. frontend\src\contexts\FoodProviderMealContext\action.jsx
7. frontend\src\contexts\FoodProviderMealContext\FoodProviderMealContext.jsx
8. frontend\src\contexts\FoodProviderMealContext\reducer.jsx
9. frontend\src\pages\Customer\CustomerHomePage.jsx
10. frontend\src\pages\Customer\FoodProviderPage.jsx
11. frontend\src\pages\Customer\MealPageCustomer.jsx
12. frontend\src\pages\FoodProvider\AddAMeal.jsx
13. frontend\src\pages\FoodProvider\MealMenuManagement.jsx
14. frontend\src\pages\FoodProvider\MealPage.jsx
15. frontend\src\pages\FoodProvider\UpdateAMeal.jsx

## Integration Instructions

*User role: Food Service Provider*

To redirect to mealmenumanagement page, Click on Meals button in Admin Sidebar. Requires the User to be Logged in.

*User role: Customer*

User will be redirected to CustomerHomePage on successful Login, the rest of the tasks can be accessed from this page. Requires the User to be logged in.


To integrate this feature in the fronted, just copy the following folders in your src directory.
- components\Customer
- components\FoodServiceProvider
- context\CustomerMealContext
- context\FoodProviderMealContext
- pages\Customer
- pages\FoodProvider

This will add all the required functionality with Integration to your frontEnd project. Now, to set routes, add following in your app.jsx folder.
```
<Route path="/customer/home-page" element={<CustomerHomePage />} />
<Route path="/customer/food-provider-page/:foodProviderId" element={<FoodProviderPage />}/>
<Route path="/customer/meal-page/:mealId" element={<MealPageCustomer />} />

<Route path="/foodprovider/mealmenumanagement" element={<MealMenuManagement />} />
<Route path="/foodprovider/meal-page/:mealId" element={<MealPage />} />
<Route path="/foodprovider/add-a-meal" element={<AddAMeal />} />
<Route path="/foodprovider/update-a-meal/:mealId" element={<UpdateAMeal />} />
```

Similarly, to integrate backend to your Spring boot application, just copy the following files in your main package folder.
- controllers\CustomerController.java
- controllers\FoodServiceProviderController.java
- dto\MealResponseDTO.java
- dto\FoodProviderResponseDTO.java
- dto\request\AddMealRequest.java
- dto\response\mealmenumanagement\GetASingleFoodProvider.java
- dto\response\mealmenumanagement\GetASingleMealResponse.java
- dto\response\mealmenumanagement\GetFoodProviderListResponse.java
- dto\response\mealmenumanagement\GetMealListResponse.java
- repositories\MealRepository.java
- services\ICustomerService.java
- services\IFoodProviderService.java
- services\impl\CustomerServiceImpl.java
- services\impl\FoodProviderServiceImpl.java


The path of the required API endpoints are:

*User role: Food Service Provider*

GET  https://tiffin-box.onrender.com/api/foodserviceprovider/getAllMeals - to get list of meals offered by logged In Food Provider ( Needs Auth Token )

GET  https://tiffin-box.onrender.com/api/foodserviceprovider/getMeal/{mealId} - to get details about a Single Meal with given mealId

POST https://tiffin-box.onrender.com/api/foodserviceprovider/addMeal - to add a new meal, the body should contain formData with meal details to be added

PUT https://tiffin-box.onrender.com/api/foodserviceprovider/updateMeal/{mealId}- to update the  meal with given mealId, the body should contain formData with meal details to be updated

DELETE https://tiffin-box.onrender.com/api/foodserviceprovider/deleteMeal/{mealId} - to delete the meal with given mealId

*User role: Customer*

GET https://tiffin-box.onrender.com/api/customer/getfoodproviders - to get list of Food Service Providers

POST https://tiffin-box.onrender.com/api/customer/searchfoodproviders - to Search Food Service Providers, the body should contain search criteria that is city and cuisineType in a JSON object 

GET https://tiffin-box.onrender.com/api/customer/getfoodprovider/{foodProviderId} - to get details about a Single Food Provider with given foodProviderId

GET https://tiffin-box.onrender.com/api/customer/getmeals/{foodServiceProviderId} - to get all the meals provided by Food Service Provider with given foodServiceProviderId

GET https://tiffin-box.onrender.com/api/customer//getMealFromId/{mealId} - to get details about a Single Meal with given mealId


## How to test my feature.

***User Role: Food Service Provider***

On Successful Login, the system will redirect you to MealMenuManagement page where you can see all the meals currently offered by logged in Food Service Provider. All the tasks can be accessed from this page through clicking corresponding buttons or meal cards.

Task-1: View/Search Meals.

    Test-1: You will be able to see all the meals that are currently offered by the Logged in Food Service Provider.

    Test-2: On typing in Search box, the system will display the Meals that matches the text in Search box.


Task-2: Add A Meal.

The System will redirect you to AddAMeal Page when you click on Add a Meal button on MealMenuManagement page.

    Test-1: If you click on Add button with some missing details in Add a Meal Form, the system will ask you to add the missing details.

    Test-2: On Clicking Add button after filling all the required details, the system will display a toast "Meal Added Successfully" and redirect you to MealMenuManagement page where you can see newly added meal.  


Task-3: Update A Meal

When you click on any meal card on MealMenuManagement page, the system will redirect you to MealPage of that Meal. The System will redirect you to UpdateAMeal page when you click on Update Button. In the UpdateAMeal Form, you will be able to see all the current details of the meal.

    Test-1: If you click on Update Button without changing any fields, the system will display a toast "Meal Updated successfully" and redirect you to MealMenuManagement page from where you can see meal without any change.

    Test-2: If you click on Update Button with some changed details, the system will display a toast "Meal Updated successfully" and redirect you to MealMenuManagement page from where you can see updated meal.

Task-4: Delete A Meal

When you click on any meal card on MealMenuManagement page, the system will redirect you to MealPage of that Meal. When you click on Delete Button, you will be prompted with a dialog box to confirm the deletion.

    Test-1: If you click on "Cancel" Button, the system will close dialog box.

    Test-2: If you click on "Delete" Button, the system will display a toast "Meal Deleted Successfully" and redirect you to MealMenuManagement where you can see that meal no longer exists.

***User Role: Customer***

On Successful Login, the System will redirect you to CustomerHomePage where you can see all the Food Service Providers.

Task-1: View/Search Food Service Providers.

    Test-1: You will be able to see all the Food Service Providers on CustomerHomePage.

    Test-2: If you click on Search Button without entering anything is Search Box, the system will display a toast "Enter Search Query to Search".

    Test-3: If you click on Search Button with City name entered in Search Box and select the preferred Cuisine type, the system will display the search result to you.

Task-2: View List of Meals offered by Food Service Providers.

When you click on any FoodServiceProvider card on CustomerHomePage, the system will redirect you to FoodProviderPage of that Food Service Provider.

    Test-1: You will be able to see Food Service Provider details as well as all the meals offered by that Food Service Provider.

Task-3: View Details of a Meal offered by Meal Service Provider

When you click on any Meal card on FoodServiceProvider page, the system will redirect you to Meal page of that Meal.

    Test-1: You will be able to see all the details of the Meal.

## Getting Started

### Prerequisites

To run the local copy of this Assignment on your local machine, you will have to first install the following libraries:

FrontEnd Dependencies

- [NodeJS](https://nodejs.org/en) `v20.x`

BackEnd Dependencies

- [Java](https://www.oracle.com/ca-en/java/technologies/downloads/) `v17.x`
- [Maven](https://maven.apache.org/download.cgi)`v3.x`

### Installing

#### Install Node.js ( For Frontend - ReactJs)

1. Goto https://nodejs.org/en/download and download the LTS installer according to your OS.
2. Run the Installer.
3. Accept the License Agreement
4. Choose Installation path.
5. Keep the default Installation settings and click on install.
6. To check the installation, run the below commands.

```
node -v
Sample output: v20.14.0
```
```
npm -v
Sample output: 10.8.1
```

#### Installing Java SDK ( For Backend - Spring boot)

1. Goto https://www.oracle.com/java/technologies/downloads/#java11 and download the Java Installer according to your OS.
2. Run the Installer.
3. Accept the License Agreement.
4. Choose Installation path.
5. Keep the default Installation settings and click on install.
6. To check the installation, run the below command.

```
java --version
Sample output: 
    java 19.0.2 2023-01-17
    Java(TM) SE Runtime Environment (build 19.0.2+7-44)
    Java HotSpot(TM) 64-Bit Server VM (build 19.0.2+7-44, mixed mode, sharing)
```

#### Installing Maven ( For build tool )

1. Goto https://maven.apache.org/download.cgi and download the binary zip archive file.
2. Extract the downloaded zip file to directory of your choice. ( Maven will be installed to this directory).
3. Add the path of bin directory of this unzipped file to PATH Environement System Variable.
4. To check the installation, run the below command.

```
mvn -v
Sample output:
    Apache Maven 3.9.6 
```

#### Installing the Required Libraries

Firstly, Clone the Project Repository

Run the following command for clone with HTTPS
```bash
 git clone https://git.cs.dal.ca/rkp/csci-5709-grp-04.git
 ```
OR

Run the following command for clone with SSH
 ```bash
 git clone git@git.cs.dal.ca:rkp/csci-5709-grp-04.git
```

***For FrontEnd***

Navigate to the React FrontEnd Project
```
cd csci-5709-grp-04
cd frontend
```
Install dependencies

- Run the following command to install frontend dependencies:

```bash
npm install
```
OR
```bash
npm i
```

Start ReactJs Application
- Run the following command to start the frontEnd
```
npm run dev
```

***For BackEnd***

Navigate to Spring boot BackEnd Project
```
cd csci-5709-grp-04
cd backend
```
Compile and Build Application
- Run the following command to compile and build the application:

```
mvn clean package
```

Start SpringBoot Application
- Run the Spring boot Application by following command:

```
java -jar target/backend-0.0.1-SNAPSHOT.jar
```

## Deployment

**Frontend:**

#### 1 Login to Netlify : Sign up or log in at Netlify.
#### 2 Create a New Site :
 - Click on "Add new Site".
 - Click  on "Import an existing project".
 - Click on "Github".
 - Connect your GitHub account and Select your Repository to be deployed.
#### 3 Configure Settings:
 - Base Directory : /frontend 
 - Build Command : npm run build
 - Publish Directory : /frontend/dist 
 - Deploy : Click "Deploy site".


**Backend:**

#### 1. Login to Render: Sign up or log in at Render.
#### 2. Create a New Web Service:
 - Click "New" and select "Web Service".
 - Connect your GitHub account and select your repository.
#### 3. Configure Settings:
 - Name: Give your service a name.
 - Language: Choose Docker as Language.
 - Region: Select the region closest to you.
 - Branch: Select the "main" branch to deploy.
 - Root Directory: Give "./csci-5709-grp-04/backend" as your root directory for Spring boot application.
#### 4. Deploy
  - Click "Create Web Service" to deploy your Spring boot application.

## Built With

* [Vite](https://vitejs.dev/) - The build tool used for development
* [React](https://reactjs.org/) - The JavaScript library used for building the user interface.
* [Tailwindcss](https://tailwindcss.com/) - A utility-first CSS framework packed with ready to use classes
* [DaisyUI](https://daisyui.com/) - Component library for Tailwind CSS
* [Spring Boot](https://spring.io/projects/spring-boot) - Spring boot is an open-source,microservice-based java web framework for creating web apps and microservices.
- [MongoDB](https://www.mongodb.com/) - NoSQL Database

## Sources Used

### backend\src\main\java\com\tiffinbox\backend\services\impl\CustomerServiceImpl.java

*Line 46 - 48*
```

foodProviderResponseDTOList = sellerRepository.findByCity(city).stream()
                    .map(this::convertToFoodProviderDTO)
                    .filter(foodProviderResponseDTO -> 
                        foodProviderResponseDTO.getCuisineType()
                       .contains(searchFoodProviderRequest.getCuisineType()))
                    .toList();
```

The code above was created by adapting the code from [Stack Overflow's chat threaad](https://stackoverflow.com/questions/75896970/how-can-i-be-able-to-perform-a-filter-on-a-nested-list-within-another-java-list) as shown below:

```
List<YearBrandDTO> years = yearRepository.findAll().stream()
    .map(year -> {
        List<Brand> filteredBrands = year.getBrands().stream()
            .filter(brand -> brand.getName().equals("Toyota"))
            .collect(Collectors.toList());
```

<!---How--->
-  The code in [Stack Overflow's chat thread](https://stackoverflow.com/questions/75896970/how-can-i-be-able-to-perform-a-filter-on-a-nested-list-within-another-java-list) provided by [devblack-exe User](https://stackoverflow.com/users/14738350/devblack-exe) was implemented by propely understanding the working of java functions such as streams(), map() and filter(). After Understanding, I have modified the code as per my requirement.

  
<!---Why--->
-  [Stack Overflow's chat thread](https://stackoverflow.com/questions/75896970/how-can-i-be-able-to-perform-a-filter-on-a-nested-list-within-another-java-list)'s Code provided by [devblack-exe User](https://stackoverflow.com/users/14738350/devblack-exe) was used because it gave me the idea on how to filter out FoodProviders based on provided search filter.

  
<!---How--->
-  [Stack Overflow's chat thread](https://stackoverflow.com/questions/75896970/how-can-i-be-able-to-perform-a-filter-on-a-nested-list-within-another-java-list)'s Code provided by [devblack-exe User](https://stackoverflow.com/users/14738350/devblack-exe) was modified by using the combination of map() and filter() function together to meet the requirement.


### backend\src\main\java\com\tiffinbox\backend\controller\FoodServiceProvider.java

*Line 33 - 38*

*Line 64-69*
```
            @RequestPart("mealImage") MultipartFile mealImage,
            @RequestPart("mealName") String mealName,
            @RequestPart("mealDescription") String mealDescription,
            @RequestPart("mealPrice") String mealPrice,
            @RequestPart("mealType") String mealType,
            @RequestPart("cuisineType") String cuisineType
```
The code above was created by adapting the code in [Multipart File with Springboot](https://medium.com/techpanel/multipartfile-with-springboot-d4901ee3e77d) as shown below:

```
public ResponseEntity<String> uploadFile(@RequestPart(value = "file") MultipartFile file) {
  service.uploadFile(file);
  return new ResponseEntity<>("success", HttpStatus.OK);
}
```

<!---How--->
-  [Multipart File with Springboot](https://medium.com/techpanel/multipartfile-with-springboot-d4901ee3e77d) was implemented by properly reading the original source and understanding how Multipart files are recieved in the backend.

  
<!---Why--->
-  [Multipart File with Springboot](https://medium.com/techpanel/multipartfile-with-springboot-d4901ee3e77d)'s Code was used because it provided the option to handle image upload without needing to convert the image to base64. This option also decreases frontEnd work as files will be passed to backend as they are uploaded by User.

  
<!---How--->
-  [Multipart File with Springboot](https://medium.com/techpanel/multipartfile-with-springboot-d4901ee3e77d)'s Code was modified by also accepting other details about meals such as mealName, mealDescription etc as part of the formData. 

### frontend\src\pages\FoodProvider\AddAMeal.jsx

*Line 24 - 35*
```
    const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
    setMealData({ ...mealData, mealImage: file });
    console.log(e.target.files[0]);
  };
```
*Line 78-87*
```
{preview && (
            <div className="mt-4">
              <p className="text-md font-bold text-gray-600">Image Preview:</p>
              <img
                src={preview}
                alt="Preview"
                className="max-w-full h-auto border border-gray-300 rounded-lg"
              />
            </div>
          )}
```
The code above was created by adapting the code in [How to display preview of an image in React](https://nikolasbarwicki.com/articles/how-to-display-a-preview-of-an-image-upload-in-react/) as shown below:

```
  useEffect(() => {
    if (!file) {
      return
    }
    const reader = new FileReader()
    reader.onloadend = () => {
      setPreviewUrl(reader.result)
    }
    reader.readAsDataURL(file)
  }, [file])
  return (
    <>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      {previewUrl && <img src={previewUrl} alt="Preview" />}
    </>
  )
}

```

<!---How--->
-  [How to display preview of an image in React](https://nikolasbarwicki.com/articles/how-to-display-a-preview-of-an-image-upload-in-react/) was implemented by properly reading the original source and understanding how and when states change so that Image is stored in state when it is loaded.

  
<!---Why--->
-  [How to display preview of an image in React](https://nikolasbarwicki.com/articles/how-to-display-a-preview-of-an-image-upload-in-react/)'s Code was used because it gave me the idea to show the image preview whenever user uploads the image. This feature helps user ensure that the image that they are uploading is infact what they want to uplaod.

  
<!---How--->
-  [How to display preview of an image in React](https://nikolasbarwicki.com/articles/how-to-display-a-preview-of-an-image-upload-in-react/)'s Code was modified by handling the Image uploading directly in the handler functions. As a result, the image is previewed immediately after an upload. I have also modified the preview design to match the application design. 


## Acknowledgments

- I want to extend my gratitude to the creators and developers of the sources mentioned above. Their ideas and it's implementation really helped me to complete as well as provide some additional functionality to my feature. It helped in creating the better User Experience.

- This Article named [How to implement search...](https://www.geeksforgeeks.org/how-to-implement-search-filter-functionality-in-reactjs/) on GeeksForGeeks gave me idea of how to implement Search Functionality in ReactJs FrontEnd.

**References:**

[1]	    “Node.js — Download Node.js®.” https://nodejs.org/en/download/package-manager/    current(accessed Jul. 30, 2024).

[2]	“Spring Boot,” Spring Boot. https://spring.io/projects/spring-boot (accessed Jul. 30, 2024).    

[3]	“Maven – Installing Apache Maven.” https://maven.apache.org/install.html (accessed Jul. 30, 2024).    

[4]	“Quick Start – React.” https://react.dev/learn (accessed Jul. 30, 2024).    

[5]	“MongoDB: The Developer Data Platform,” MongoDB. https://www.mongodb.com/ (accessed Jul. 30, 2024).    

[6]	“Tailwind CSS Components,” Tailwind UI. https://tailwindui.com/components?ref=sidebar (accessed Jul. 30, 2024).    

[7]	“daisyUI — Tailwind CSS Components ( version 4 update is here ).” https://daisyui.com/ (accessed Jul. 30, 2024). 