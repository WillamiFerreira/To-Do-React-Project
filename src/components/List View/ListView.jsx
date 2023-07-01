import styles from './ListView.module.scss'

const ListView = () => {
    const tasks = [
        "Task 01",
        "Task 02",
        "Task 03",
        "Task 04",
        "Task 05",
        "Task 06"
    ]

    return (
        <div className={styles.container}>
            <div className="list">
                <ul>
                    {
                        tasks.map(task => (
                            <li key={task}>{task}</li>
                        ))
                    }
                </ul>
            </div>

        </div>
    );
};

export default ListView;