import Alpine from 'alpinejs'
import './style.css'

declare global {
    interface Window { Alpine: any; }
}

window.Alpine = Alpine
 
Alpine.start()