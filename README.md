<div align="center">

![Django](https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)\
![](https://snyk.io/test/github/Szymcode/TodoApp/badge.svg)
![License](https://img.shields.io/badge/license-MIT-blue)
</div>




# TodoApp

Simple TodoApp built with Django for educational purposes. [Preview](https://szymcode-todoapp-django.herokuapp.com)
## ⭐ Features 

🔹 User login and registration </br>
🔹 Create, edit and delete tasks </br>
🔹 Task searching </br>
🔹 Custom admin panel </br>



<details><summary> <h2>  🛠️ Installation:  </summary>

• First make sure u have installed latest versions of [Python, Django](https://www.geeksforgeeks.org/django-introduction-and-installation/).

• Clone this repository or download latest release.

• Install modules from requirements.txt in **TodoApp** directory.

```bash
pip install -r requirements.txt
```

### **Make sure u have installed all modules!**

• Change SECRET_KEY in **TodoApp** settings or create .env file with following data:

```bash
SECRET_KEY = 'example_secret_key'
```

• Create or update existing database in **TodoApp** directory:

```bash
python manage.py migrate
```

</details> 



<details><summary> <h2>  🚀 Run:  </summary>

• **TodoApp** directory:

```bash
python manage.py runserver
```

</details>



<details><summary> <h2> ❓ Usage  </summary>

• **localhost:8000** - TodoApp main page

• **localhost:8000/login** & **/register** - login and registration

• **localhost:8000/admin** - Django admin panel

</details>

</br>


## Preview images

![app_preview](https://github.com/SzymCode/TodoApp/blob/main/images/list_preview.png)\
![app_preview](https://github.com/SzymCode/TodoApp/blob/main/images/empty_preview.png)\
![app_preview](https://github.com/SzymCode/TodoApp/blob/main/images/edit_preview.png)\
![app_preview](https://github.com/SzymCode/TodoApp/blob/main/images/informations_preview.png)
