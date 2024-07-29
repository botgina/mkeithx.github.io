import React, { ReactNode } from "react";
import Translate from "@docusaurus/Translate";
import Link from "@docusaurus/Link";


type WebsiteLinkProps = {
  to: string;
  children?: ReactNode;
};

function WebsiteLink({ to, children }: WebsiteLinkProps) {
  return (
    <Link to={to}>
      {children ?? (
        <Translate id="team.profile.websiteLinkLabel">website</Translate>
      )}
    </Link>
  );
}

type ProfileProps = {
  className?: string;
  name: string;
  subTitle: string;
  githubUrl: string;
};

function QuickStartCard({
  className,
  name,
  subTitle,
  githubUrl,
}: ProfileProps) {
  return (
    <div className={className}>
      <div className="card shadow--tl">
        <div className="card__header">
          <div className="avatar">
            {/* <img
              className="avatar__photo avatar__photo--lg margin-vert--sm"
              src={`${githubUrl}.png`}
              alt={`${name}'s avatar`}
            /> */}
            <div className="avatar__intro">
              <div className="avatar__name">{name}</div>
              <small className="avatar__subtitle">{subTitle}</small>
            </div>
          </div>
        </div>
        <div className="card__footer">
          <div className="button-group">
            {githubUrl && (
              <Link
                className="button button--outline button--primary"
                href={githubUrl}
              >
                {"Learn more"}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function QuickStartCol(props: ProfileProps) {
  return <QuickStartCard {...props} className="col col--6 margin-bottom--lg" />;
}

export function QuickStartCardRow(): JSX.Element {
  return (
    <div className="row">
      <QuickStartCol
        name="SpaceHub"
        subTitle="Space exploration, technological advances, and physics."
        githubUrl="/cosmos"
      />
      <QuickStartCol
        name="Guides and Gists"
        subTitle="Advanced guides for for IT Developers and System Administrators."
        githubUrl="/docs/devops"
      />
      <QuickStartCol
        name="Blog"
        subTitle="Recent updates and Releases"
        githubUrl="/blog"
      />
      {/* <QuickStartCol
        name="Feature Requests"
        subTitle="Submit your feature requests."
        githubUrl="/feature-requests"
      /> */}
    </div>
  );
}
export function DevOpsCardRow(): JSX.Element {
  return (
    <div className="row">
      <QuickStartCol
        name="PowerShell"
        subTitle="Get started with PowerShell"
        githubUrl="/docs/devops/troubleshoot/powershell"
      />
      <QuickStartCol
        name="aka.ms"
        subTitle="All about aka.ms"
        githubUrl="/docs/devops/admin-center/aka-ms"
      />

    </div>
  );
}