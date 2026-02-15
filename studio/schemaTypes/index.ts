import {homePageType} from './pages/homePageType'
import {aboutPageType} from './pages/aboutPageType'

import {featuredArticle} from './sections/featuredArticle'
import heroSection from './sections/heroSection'

import {heroSectionType} from './elements/heroSectionType'
import {employeeCardType} from './elements/employeeCardType'
import {textTitleType } from './elements/titleTextType'
import {dropDownType} from './elements/dropDownType'
import { riskPageType } from './pages/riskPageType'
import { faqPageType } from './pages/faqPageType'
import { personalPageType } from './pages/personalPageType'
import { corporatePageType } from './pages/corporatePageType'
import { articlePageType } from './pages/articlePageType'
import { legalPageType } from './pages/legalPageType'
import { navbarType } from './elements/navbarType'
import {contactType} from './elements/contactType'
import {footerType} from './elements/footerType'

export const schemaTypes = [
    // Defined page schemas
    homePageType,
    aboutPageType,
    riskPageType,
    faqPageType,
    personalPageType,
    corporatePageType,
    articlePageType,
    legalPageType,

    // Element schemas
    heroSectionType,
    employeeCardType,
    textTitleType,
    dropDownType,
    navbarType,
    contactType,
    footerType,

    // Legacy code
    featuredArticle,
    heroSection,
    
]