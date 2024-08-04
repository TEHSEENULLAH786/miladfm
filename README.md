# Personal Ticket-Tracking Dashboard

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Challenges](#challenges)
- [Additional Notes](#additional-notes)

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/download/)
- [Angular CLI](https://angular.io/cli) (version 13 or above)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-repo/personal-ticket-tracking-dashboard.git
    ```

2. Navigate to the project directory:
    ```bash
    cd personal-ticket-tracking-dashboard
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

### Running the App

1. Start the development server:
    ```bash
    ng serve
    ```

2. Open your browser and navigate to `http://localhost:4200/`.

## Project Structure

The project follows a modular structure, organizing components, services, and interfaces into separate folders for maintainability and scalability. Key folders include:

- `src/app/core`: Contains core services and interfaces.
- `src/app/shared`: Contains shared components and widgets.
- `src/app/pages/dashboard`: Contains the dashboard page component.

## Challenges

### Most Difficult Part

The most challenging part of this project was managing the state of the selected timeframe in the parent `DashboardPage` component while correctly emitting and handling events in the child `TimeframeSwitcherComponent`.

### Easiest Part

The easiest part was setting up the initial project structure and creating the basic components using Angular CLI. Leveraging Angular's powerful CLI tools made it straightforward to generate and scaffold components, services, and interfaces.

## Additional Notes

- **Styling**: A separate `variables.scss` file was created for managing CSS variables, which helps in maintaining consistent styling across the application.
- **Performance**: Implementing Angular's change detection strategies and leveraging `SSR` could further optimize the application's performance.

Feel free to reach out if you have any questions or need further clarifications.

