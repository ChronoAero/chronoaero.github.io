import Alpine from 'alpinejs'
import './style.css'

import './routing.ts'

declare global {
    interface Window { Alpine: any; }
}

window.Alpine = Alpine
 
Alpine.start()