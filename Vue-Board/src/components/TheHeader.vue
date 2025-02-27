<template>
    <header>
        <nav>
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/board">Board</router-link></li>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
    ul {
        list-style: none;
        display: flex;
        gap: 1rem;
        font-size: 1.2rem;
    }
    li a {
        text-decoration: none;
        color: #3498db;
        font : bold;
    }

    li a:hover {
        color: #2980b9;
        text-decoration: underline;
    }
    
</style>