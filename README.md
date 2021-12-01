# HarperDB Custom Functions - REST Recipe

This project recipe creates a dynamic REST interface for HarperDB database, granting you access to CRUD operations using standard GET, POST, PUT, DELETE, and PATCH requests.


### How to Use
To use this template, you'll need to be logged in, running HarperDB, have a local instance and have some data to work with.  If you don’t, please follow the steps below. I recommend following [this]("https://youtu.be/fAKZxK-XamM") video (from beginning until about 4:30) to get you through 1-3. I recommend [this]("https://youtu.be/rz6prItVJZU") demo video if you’d like a visual aid for steps 4 and 5 (pick up around 13:00 until about 15:00).

1. Sign up/log in [here]("https://studio.harperdb.io/sign-up")
2. Install and run HarperDB
3. Create a local instance (in studio)
4. Build some demo data (in studio)
5. Enable Custom Functions (in studio)
6. Clone this Custom Functions template and party! (open in IDE)

At this point, if you’ve been following along you will have gotten some familiarity with HarperDB Studio. It’s super easy to use and is a great tool for working with the core product. From here on, it’s great to open your Custom Functions project in your favorite IDE, like WebStorm. The “custom_functions” folder lives in the “hdb” folder. Any project you create in Custom Functions lives here.

7. Test your endpoints with Postman


### Test Endpoints

The repository includes a [Postman](https://www.postman.com/) collection, which will allow you to test the endpoints against your own data. As the REST API template was dynamic, so are the URLs in the Postman collection. Here's a link to this project's environment [variables]("https://go.postman.co/workspace/My-Workspace~58429cc6-621f-475d-8f01-b3cdfe0c9dd6/environment/18074441-ed8f2c6b-63dd-4121-a71d-178ec5206cd0"). You will likely need to change some values to fit your project. OR you may also hard-code the route for your needs, (ex: http://localhost:9926/project/schema/table plus any necessary route parameter such as "id".)