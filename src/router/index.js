import VueRouter from 'vue-router'
import HomeCenter from '../components/HomeCenter/HomeCenter'
import AllApprovals from '../components/AuditCenter/AllApprovals'
import PendingApprovals from '../components/AuditCenter/PendingApprovals'
import ProcessedApprovals from '../components/AuditCenter/ProcessedApprovals'
import ApprovalDetails from '../components/AuditCenter/ApprovalDetails'
import AllProcurements from '../components/ProcurementCenter/AllProcurements'
import PendingProcurements from '../components/ProcurementCenter/PendingProcurements'
import ProcessedProcurements from '../components/ProcurementCenter/ProcessedProcurements'
import WarehouseCenter from '../components/WarehouseCenter/WarehouseCenter'
import MessageCenter from '../components/MessageCenter/MessageCenter'

export default new VueRouter({
    routes: [
        {
            path: '/home-center',
            component: HomeCenter,
        },
        {
            path: '/audit-center/all',
            component: AllApprovals,
        },
        {
            path: '/audit-center/pending',
            component: PendingApprovals,
        },
        {
            path: '/audit-center/processed',
            component: ProcessedApprovals,
        },
        {
            path: '/audit-center/approval-details/:id',
            component: ApprovalDetails,
        },
        {
            path: '/procurement-center/all',
            component: AllProcurements,
        },
        {
            path: '/procurement-center/pending',
            component: PendingProcurements,
        },
        {
            path: '/procurement-center/processed',
            component: ProcessedProcurements,
        },
        {
            path: '/warehouse-center',
            component: WarehouseCenter,
        },
        {
            path: '/message-center',
            component: MessageCenter,
        },
    ]
})
