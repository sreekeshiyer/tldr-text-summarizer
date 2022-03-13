### Initial Setup

-   Install your preferrend environment manager
    -   Eg : `pip install pipenv`
-   Goto `Backend` directory in cmd
-   Activate the virtual env
    -   Eg - `pipenv shell`
-   Install Requirements.txt
    -   Eg - `pipenv install -r requirements.txt`

### To start the Flask Server :

-   First Method :

    -   Create a .env file in backend directory
    -   Add `FLASK_ENV=development` to `.env` file
    -   Hit `python wsgi.py` in cmd

-   Second Method :

    -   Create a launch.json file in .vscode folder
    -   Add the following snippet

    ```
    {
    "version": "0.2.0",
    "configurations": [
     {
       "name": "Python: Flask",
       "type": "python",
       "request": "launch",
       "module": "flask",
       "env": {
         "FLASK_APP": "backend/wsgi.py",
         "FLASK_ENV": "development"
       },
       "args": ["run", "--no-debugger"],
       "jinja": true
     }
    ]
    }

    ```

    -   Use the vscode debugger

-   To test if you application is working : goto `http://localhost:5000/test_without_db`

### Test Setup (Optional)

-   To run tests locally you need to hit `python -m pytest -v` on cmd

### Important Points to be noted

-   If you add an external library, please don't forget to freeze the dependencies in requirements.txt
-   Use python black formatter to format your python code
-   Please don't merge any PR or branch in prod which violates github pipeline, the pipeline should always be fixed
