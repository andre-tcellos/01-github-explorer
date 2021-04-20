interface RepositoryItemProps {
    repository: {
        name: string;
        description: string;
        html_url: string;
    }
};

export function RepositoryItem(props: RepositoryItemProps) {
    return (
        <li>
            <h3>{props.repository.name}</h3>
            <p>{props.repository.description}</p>
            <a href={props.repository.html_url} target="_blank">Acessar Repositório</a>
        </li>
    );
}