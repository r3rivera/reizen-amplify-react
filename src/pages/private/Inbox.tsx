import { useEffect, useState } from "react";
import type { Schema } from "../../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

const client = generateClient<Schema>();

const Inbox = () =>{
    const [inboxItem, setInboxItems] = useState<Array<Schema["InboxItems"]["type"]>>([]);

    useEffect(() => {
        client.models.InboxItems.observeQuery().subscribe({
            next: (data) => setInboxItems([...data.items]),
        });
    }, []);
  
    return (
        <div>Inbox</div>
    );
};
export default Inbox;