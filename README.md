# Nest-Auth

## Description

This project is built using NestJS, featuring a complete authentication system implemented with Prisma and PostgreSQL for logging in. It incorporates class-validator for DTO validation and utilizes JWT tokens and refresh tokens for authentication.

## Setup Instructions

1. Clone the repository:

    ```bash
    git clone https://github.com/Matheuscara/nest-auth.git
    ```

2. Navigate to the project directory:

    ```bash
    cd Nest-Auth
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Initialize Prisma:

    ```bash
    npx prisma init
    ```

5. Run database migrations:

    ```bash
    npx prisma migrate dev
    ```

6. Install Prisma provider to verify the database (optional):

    ```bash
    npx prisma studio
    ```

7. Configure your database environment variables. Refer to the [Prisma documentation](https://www.prisma.io/docs/orm/more/development-environment/environment-variables/managing-env-files-and-setting-variables) for guidance on managing environment variables and setting up your `.env` file.

8. Run Dockerfile (if applicable).

## Running the Project

To start the development server, use the following command:

```bash
npm run start:dev
```

## Additional Notes

Make sure you have Docker installed and running if you plan to utilize Dockerfile.

## Contributors

- [Your Name](https://github.com/your_username)

Feel free to contribute by opening issues or creating pull requests.

For further assistance, contact [your_email@example.com](mailto:your_email@example.com).
