/* ----------------------------------------- */
// Do not edit this file
/* ----------------------------------------- */

import path from 'path'

const allowed = ['audits', 'blog', 'ecosystems', 'news', 'pages', 'pressroom', 'programs', 'roadmap', 'vacancies', 'videos']

const root = path.join(process.cwd(), 'public', 'cache')

const config = { allowed, root }

export { config }
