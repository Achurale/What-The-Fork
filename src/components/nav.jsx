import './nav.css'

export default function Nav({currentPage, handlePageChange}) {
    return (
        <nav>
            <ul>
                <li><a href="#home" onClick={() => handlePageChange('Home')}>Home</a></li>
                <li>-</li>
                <li><a href="#favorites" onClick={() => handlePageChange('Favorite')}>Favorites</a></li>
                <li>-</li>
                <li><a href="#recipe" onClick={() => handlePageChange('Recipe')}>Create Recipes</a></li>
                <li>-</li>
                <li><a href="#login" onClick={() => handlePageChange('Login')}>Login/Signup</a></li>
            </ul>
        </nav>
    )
}