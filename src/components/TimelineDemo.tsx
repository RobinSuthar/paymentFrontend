import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "Goal",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Empowering Learning Through Digital Transactions
          </p>
          <p>
            The goal of this project is to provide a learning-focused platform
            where developers, students, and fintech enthusiasts can explore how
            digital transactions work in a safe and controlled environment. By
            simulating real-world payment flows without involving actual money,
            this project helps users understand key concepts like
            authentication, transaction validation, security, and database
            management. Whether you're a beginner learning about online payments
            or an experienced developer testing APIs, this platform allows you
            to send and receive demo money, experience secure authentication
            with JWT, ensure data integrity with Zod validation, and explore
            frontend interactions using Framer Motion. Built with modern
            technologies like React, Express, and Mongoose, this project aims to
            bridge the gap between theoretical knowledge and hands-on
            experience. The goal is to create a risk-free space where users can
            experiment, test, and refine their understanding of how payment
            systems function, all while ensuring that no real money or sensitive
            financial data is involved.
          </p>
        </div>
      ),
    },
    {
      title: "Challenges & Key Learnings",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            One of the biggest challenges in building this platform was
            understanding how transactions work in the real world and ensuring
            that they are processed securely and efficiently. In a real payment
            system, transactions must be atomic, meaning they either complete
            fully or fail entirely—there can be no in-between state where money
            is deducted but not received.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            To achieve this, I learned how to use Mongoose sessions to manage
            database transactions properly. The process works like this:
          </p>

          <li>Start a session in Mongoose.</li>
          <li>
            {" "}
            Begin a transaction, ensuring all operations are tied together.
          </li>
          <li>
            Perform the necessary updates (deducting from the sender’s balance,
            adding to the receiver’s).
          </li>
          <li>
            Commit the transaction once everything is verified and successful.
          </li>
          <li>
            If something goes wrong, abort the transaction to prevent partial
            changes.
          </li>

          <h2>Why is this necessary?</h2>
          <p>
            <li>
              If the backend crashes or goes down unexpectedly, we don’t want
              transactions to be stuck in an incomplete state. With transaction
              handling, a payment either fully succeeds or is completely rolled
              back, ensuring consistency in the system.
            </li>
            <li>
              Transactions also prevent double-spending issues. For example, if
              a user with $100 tries to send $100 to Person A and $100 to Person
              B at the exact same time, a simple balance check might allow both
              transactions to go through, leading to an overdraft. By using
              transactions with locks, we ensure that only one transaction can
              proceed at a time—if the balance isn’t sufficient, both
              transactions will be aborted instead of one succeeding unfairly.
            </li>

            <p>
              This was a crucial learning experience in how real-world financial
              systems ensure reliability and prevent fraud, making the platform
              more secure and realistic for users.
            </p>
          </p>
        </div>
      ),
    },
    {
      title: "Changelog",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            No Real Money, Just Real Learning
          </p>

          <p>
            This platform is built strictly for educational purposes—no actual
            financial transactions take place. Users can freely experiment with
            sending and receiving demo money, authentication flows, and
            transaction handling without any real-world financial risks. There
            are no bank integrations, credit card payments, or actual currency
            transfers—everything operates in a controlled sandbox environment
            designed for learning and development. This means you can test
            secure authentication, transaction processing, and database
            management without worrying about fraud, privacy concerns, or
            monetary loss. Whether you're a beginner exploring digital payments
            or an experienced developer testing fintech applications, this
            platform provides a risk-free space to understand and refine
            transaction-based systems—all while ensuring that no real money or
            sensitive financial data is ever involved.
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
