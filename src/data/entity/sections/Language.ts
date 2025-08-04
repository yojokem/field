import { Entity } from 'typeorm';
import * as L from '../../../utils/language-support/language';

@Entity({name: "lang"})
export class Language extends L.Language {
    
}