import { useEffect, useState } from "react";
import { Table } from "antd";

const Datatable = ({ columns, dataSource = [], Selection, loading, pagination, onPageChange }) => {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [Selections, setSelections] = useState(true);
    const [filteredDataSource, setFilteredDataSource] = useState([]);

    // ✅ IMPORTANT FIX: Sync when API data changes
    useEffect(() => {
        setFilteredDataSource(dataSource);
    }, [dataSource]);

    // ✅ Selection toggle
    useEffect(() => {
        setSelections(Selection);
    }, [Selection]);

    const onSelectChange = (newSelectedRowKeys) => {
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const handleSearch = (value) => {
        setSearchText(value);

        if (!value) {
            setFilteredDataSource(dataSource);
            return;
        }

        const filtered = dataSource.filter((record) =>
            Object.values(record).some((field) =>
                String(field).toLowerCase().includes(value.toLowerCase())
            )
        );

        setFilteredDataSource(filtered);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };

    return (
        <>
            {/* Search */}
            <div className="table-top-data d-flex px-3 justify-content-between">
                <div />
                <div className="serch-global text-right">
                    <input
                        type="search"
                        className="form-control form-control-sm mb-3 w-auto float-end"
                        value={searchText}
                        placeholder="Search"
                        onChange={(e) => handleSearch(e.target.value)}
                    />
                </div>
            </div>

            {/* Table */}
            <Table
                className="table datanew dataTable no-footer"
                loading={loading}
                rowKey={(record) => record.id || record.key}
                columns={columns}
                dataSource={filteredDataSource}
                rowHoverable={false}
                rowSelection={Selections ? rowSelection : undefined}
                // pagination={{
                //     current: pagination?.page ?? 1,
                //     pageSize: pagination?.limit ?? 10,
                //     total: pagination?.totalRecords ?? 0,

                //     showSizeChanger: true,
                //     pageSizeOptions: ["10", "20", "30", "50"],

                //     // ✅ Remove "/ page" text
                //     locale: {
                //         items_per_page: "",
                //     },

                //     showTotal: (total, range) =>
                //         `${range[0]}–${range[1]} of ${total} items`,

                //     onChange: (page, pageSize) => {
                //         onPageChange?.(page, pageSize);
                //     },

                //     onShowSizeChange: (_, newPageSize) => {
                //         onPageChange?.(1, newPageSize);
                //     },
                // }}
                pagination={false}

            />
        </>
    );
};



export default Datatable;


// // index.tsx
// import  { useEffect, useState } from "react";
// import { Table } from "antd";


// const Datatable= ({columns, dataSource = [], Selection, loading, pagination, onPageChange }) => {
//   const [selectedRowKeys, setSelectedRowKeys] = useState([]);
//   const [searchText, setSearchText] = useState("");
//   const [Selections, setSelections] = useState(true);
//   const [filteredDataSource, setFilteredDataSource] = useState(dataSource);

//   const onSelectChange = (newSelectedRowKeys) => {
//     setSelectedRowKeys(newSelectedRowKeys);
//   };

//   const handleSearch = (value) => {
//     setSearchText(value);
//     const filteredData = dataSource.filter((record) =>
//       Object.values(record).some((field) =>
//         String(field).toLowerCase().includes(value.toLowerCase())
//       )
//     );
//     setFilteredDataSource(filteredData);
//   };

//   const rowSelection = {
//     selectedRowKeys,
//     onChange: onSelectChange,
//   };
//   useEffect(() => {
//     return setSelections(Selection);
//   }, [Selection])


//   return (
//     <>
//      <div className="table-top-data d-flex px-3 justify-content-between">
//       <div className="page-range">
//       </div>
//       <div className="serch-global text-right">
//         <input type="search" className="form-control form-control-sm mb-3 w-auto float-end" value={searchText} placeholder="Search" onChange={(e) => handleSearch(e.target.value)} aria-controls="DataTables_Table_0"></input>
//       </div>
//      </div>
//      {!Selections ?
//       <Table
//       className="table datanew dataTable no-footer"
//       rowKey={(record) => {
//         // Generate a unique key using available fields
//         if (record.id) return `row-${record.id}`;
//         if (record.key) return `row-${record.key}`;
//         // Create a hash of the record to use as a fallback key
//         const recordStr = JSON.stringify(record);
//         return `row-${recordStr.split('').reduce((a, b) => {
//           a = ((a << 5) - a) + b.charCodeAt(0);
//           return a & a;
//         }, 0).toString(16)}`;
//       }}
//       columns={columns}
//       rowSelection={{
//         type: 'checkbox',
//         selectedRowKeys,
//         onChange: onSelectChange,
//         getCheckboxProps: (record) => ({
//           // Add any additional checkbox props here if needed
//         })
//       }}
//       rowHoverable={false}
//       dataSource={filteredDataSource}
//       pagination={{
//         locale: { items_per_page: "" },
//         nextIcon: <span>Next</span>,
//         prevIcon: <span>Prev</span>,
//         defaultPageSize: 10,
//         showSizeChanger: true,
//         pageSizeOptions: ["10", "20", "30"],
//       }}
//     /> :
//     <Table
//         className="table datanew dataTable no-footer"
//         rowKey={(record) => {
//           // Generate a unique key using available fields
//           if (record.id) return `row-${record.id}`;
//           if (record.key) return `row-${record.key}`;
//           // Create a hash of the record to use as a fallback key
//           const recordStr = JSON.stringify(record);
//           return `row-${recordStr.split('').reduce((a, b) => {
//             a = ((a << 5) - a) + b.charCodeAt(0);
//             return a & a;
//           }, 0).toString(16)}`;
//         }}
//         rowSelection={rowSelection}
//         columns={columns}
//         rowHoverable={false}
//         dataSource={filteredDataSource}
//         pagination={{
//           locale: { items_per_page: "" },
//           nextIcon: <span>Next</span>,
//           prevIcon: <span>Prev</span>,
//           defaultPageSize: 10,
//           showSizeChanger: true,
//           pageSizeOptions: ["10", "20", "30"],
//         }}
//       />}

//     </>
//   );
// };

// export default Datatable;
