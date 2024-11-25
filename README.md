# Revival - AI Extension

# **Problem Statement**:

The user often encounters valuable ideas or content while browsing in Chrome. These moments are important for learning or further exploration but are often forgotten due to `existing work or quest they are on`. Even when such ideas are noted down in notebook like I do, the user rarely revisits them, and the notes are often lost or discarded to trash. This results in missed opportunities for learning or deeper exploration.

### **Proposed Solution (Extension Idea)**:

The extension acts as a **“Friendly Recommender”** that solves this problem by:

1. Allowing users to **toggle a recording feature(that records your voice for a moment)** while visiting a website and verbally noting down `(if you find something thats important but can’t invest your time right now)` what they want to explore or learn later (e.g., “I would explore Query Optimization”).
2. Capturing this input and **processing it into `key points`** using an **on-device AI summarizer (Gemini Nano)**.
3. Storing the processed key points as a **`wishlist`** of topics or ideas for the user.
4. **Periodically fetching related articles or resources** from internet about the saved topics and notifying the user as a gentle reminder to revisit their wishlist. or `they might be interested in visiting these articles related to the concepts that they wanted to explore few days back`.

The ultimate goal is to keep users engaged with their learning objectives by turning fleeting thoughts into actionable follow-ups.

---

### **How It Works(with flow)**:

1. **Recording and Capturing Ideas**:
    - When the user visits a site and encounters something they want to explore later, they toggle the "Record" button on the extension interface and verbally state their thought.
    - For example, while reading about Wikibase SDK, the user might say, “I want to explore Query Optimization.”

![image.png](Revival%20-%20AI%20Extension%2014993c5b8d8d807fbaa7c9b9d39b0e48/image.png)

1. **Processing with Gemini Nano**:
    - The recorded note is processed by **Gemini Nano’s Summarization API**, which extracts key points from the verbal input and organizes them into actionable items.

![image.png](Revival%20-%20AI%20Extension%2014993c5b8d8d807fbaa7c9b9d39b0e48/image%201.png)

1. **Storing the Wishlist**:
    - These key points are saved into a **"wishlist" interface within the extension**, easily accessible to the user.

![image.png](Revival%20-%20AI%20Extension%2014993c5b8d8d807fbaa7c9b9d39b0e48/image%202.png)

1. **Periodic Notifications and Suggestions**:
    - After a set interval (e.g., one day), the extension runs a query based on the saved topics (e.g., “Query Optimization” or “Wikidata”) to fetch related articles or tutorials.
    - The user is notified with the results, helping them re-engage with their learning intentions.

![image.png](Revival%20-%20AI%20Extension%2014993c5b8d8d807fbaa7c9b9d39b0e48/image%203.png)

---

### **Example Workflow**:

1. **Browsing Scenario**:
    - You’re reading a tutorial on **Wikibase SDK** and come across the concept of **Query Optimization**.
    - You toggle the extension’s “Record” button and say: “I want to explore Query Optimization.”
2. **Extension’s Processing**:
    - The spoken input is converted into key points (e.g., “Explore Query Optimization”) and stored in the wishlist.
3. **Follow-Up**:
    - After 24 hour/or given any interval, the extension fetches articles, videos, or resources related to Query Optimization and presents them to you as reminders.
4. **Outcome**:
    - You revisit the resources and follow up on your learning objective.

---

### **Core Features**:

- **On-the-Go Recording**: A quick and intuitive way to capture learning intentions without breaking the flow of current work.
- **AI-Powered Summarization**: Uses Gemini Nano’s on-device Summarization API to distill verbal notes into actionable items.
- **Automated Follow-Ups**: Periodically retrieves and suggests relevant resources to keep the user engaged.
- **Seamless Workflow**: Everything happens in the browser, leveraging Chrome’s built-in AI capabilities.

---

### **Why It’s Unique**:

- Tackles a **common productivity and learning challenge**: Forgetting to follow up on interesting discoveries.
- Uses **AI to make the process intelligent and efficient**, with zero server calls and full in-browser functionality.
- Combines **real-time recording** with automated reminders, making it an ideal tool for researchers, learners, and professionals.

---

This idea is innovative because it bridges the gap between discovery and action, making it easy for users to retain and act on their learning intentions without additional effort.