import React from 'react'
import { Button }  from '../../components/Button/Button'
import { DataTable } from "./../../components/DataTable/DataTable"

export class Report extends React.Component {
	render() {
		const data = [{
      id: '12345',
      number: 18,
      issue_id: 121,
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rutrum maximus luctus. Etiam mi nunc, lacinia eu augue ac, faucibus finibus ex. Praesent volutpat fringilla blandit. Nunc in arcu mi. Quisque non turpis euismod, venenatis neque ac, consectetur sem. Curabitur scelerisque urna eget mollis laoreet. Curabitur vestibulum diam quis leo vulputate facilisis. Maecenas imperdiet commodo placerat. Proin laoreet fringilla dapibus. Phasellus iaculis sit amet lorem vulputate imperdiet. Donec semper, justo elementum dapibus maximus, eros nisi lacinia neque, nec elementum erat purus tempor elit. Morbi eu lorem sit amet nulla consectetur pharetra. Suspendisse molestie sodales dolor, ut porta nulla imperdiet ut. Aenean facilisis sed odio ut vestibulum.',
      state: 'Open',
      url: 'Http://git.com',
      created_at: new Date(),
		}]
		return (
      <article className="slds-card">
        <div className="slds-card__header slds-grid">
          <header className="slds-media slds-media_center slds-has-flexi-truncate">
            <div className="slds-media__figure">
        <span className="slds-icon_container slds-icon-standard-contact" title="description of icon when needed">

        </span>
            </div>
            <div className="slds-media__body">
              <h2>
                <a href="javascript:void(0);" className="slds-card__header-link slds-truncate" title="[object Object]">
                  <span className="slds-text-heading_small">Sugam's last 6 months records (1)</span>
                </a>
              </h2>
            </div>
          </header>
          <div className="slds-no-flex">
            <button className="slds-button slds-button_neutral">Customize</button>
          </div>
        </div>
        <div className="slds-card__body">
          <DataTable
              data={data}
              columns={[
                {
                  Header: "id",
                  accessor: "id"
                },
                {
                  Header: "Title",
                  id: "title",
                  accessor: d => d.title
                },{
                  Header: 'Status',
                  accessor: 'status',
                  Cell: row => (
                    <span>
									<span style={{
                    color: row.value === 'relationship' ? '#ff2e00'
                      : row.value === 'complicated' ? '#ffbf00'
                        : '#57d500',
                    transition: 'all .3s ease'
                  }}>
										&#x25cf;
									</span> {
                      row.value === 'relationship' ? 'In a relationship'
                        : row.value === 'complicated' ? `It's complicated`
                        : 'Open'
                    }
								</span>
                  )
                },{
                  Header: "URL",
                  accessor: "url",
                  Cell: row => (
                    <span>
									<a href={row.value} target='_blank'>Open Pull request</a>
								</span>
                  )
                }
              ]}
              defaultPageSize={100}
              className="slds-table slds-table_bordered slds-table_cell-buffer -striped -highlight"
            />
        </div>
        <footer className="slds-card__footer"></footer>
      </article>

		);
	}
}