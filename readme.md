# Oh Prom!

## Overview

A project management tool which includes user authentication, profile management, project listing, task management, and real-time updates. It is built using Django, Django REST Framework, Django Channels, ReactJS, PostgreSQL, Redis, and Docker.

## Key Features

1. **Authentication and Registration**: Seamless login and registration process, empowering users to access and manage their accounts securely. Uses JWT for authentication.

2. **Project Listing**: Dashboard showcasing a list of projects created by the user.

3. **Task Management**: Streamlined task management functionality including creation, modification, and deletion of tasks within projects. Users can also update task status (Todo, In Progress, Review, Done). This is updated in real time, so check it out with two different browsers!

4. **Real-time Updates**: Integration of websockets ensures real-time updates across all users, enabling swift updation of any changes made to projects tasks.

## Technology Stack

- **Frontend**:

  - ReactJS

- **Backend**:

  - Django REST Framework
  - Django Channels

- **Database**:

  - PostgreSQL

- **Additional Tools**:
  - Redis (for websocket communication)
  - Docker (for containerization)

## How to Run

1. **Clone the repository**:

```bash
git clone https://github.com/SuryaNelakanti/oh-prom.git

```

2. **Navigate to project directory**.
``` bash
cd oh-prom
```

3. **Build and run the Docker container**:

```bash
docker-compose up --build
```

4. **In your browser, navigate to old faithful:**

```bash
http://localhost:3000
```


## License
Use it however you want :)