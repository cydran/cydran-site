import MarkdownDecorator from './MarkdownDecorator';
import {registerDecorator} from 'cydran';

registerDecorator('markdown', ['*'], MarkdownDecorator);
