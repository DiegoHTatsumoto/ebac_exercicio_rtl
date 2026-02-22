import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });
    it('teste para a inserção de dois comentários', () => {
        render(<PostComment/>)
        fireEvent.change(screen.getByTestId('comment-textarea'), {
            target: {
                value: 'primeiro comentário',
            }
        });
        fireEvent.click(screen.getByTestId('comment-button'));

        fireEvent.change(screen.getByTestId('comment-textarea'), {
            target: {
                value: 'segundo comentário',
            }
        });
        fireEvent.click(screen.getByTestId('comment-button'));

        expect(screen.getAllByTestId('comment-li')).toHaveLength(2);
        expect(screen.getByText('primeiro comentário')).toBeInTheDocument();
        expect(screen.getByText('segundo comentário')).toBeInTheDocument();
    })
});

